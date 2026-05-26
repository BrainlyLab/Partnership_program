import { useState, useEffect } from "react";
import "./profilePage.css";

// Interface based on UserProfileSerializer output
interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

interface UserProfile {
  user: User;
  username: string;
  avatar: string | null;
  brainlycoins: number;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editUsername, setEditUsername] = useState("");

  const handleSaveProfile = async () => {
    if (!editUsername.trim()) return;
    setUploading(true);
    setError("");

    try {
      const token = localStorage.getItem("access_token");
      const headers: HeadersInit = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch("http://127.0.0.1:8000/api/profile/", {
        method: "PATCH",
        headers,
        body: JSON.stringify({ username: editUsername }),
      });

      if (res.ok) {
        const data = await res.json();
        setProfile(data);
        setIsEditing(false);
      } else {
        const errData = await res.json();
        setError(JSON.stringify(errData));
      }
    } catch (e: any) {
      setError("Error saving profile.");
    } finally {
      setUploading(false);
    }
  };
  // We'll mimic fetching from the backend for the demo.
  useEffect(() => {
    // We are hardcoding a fetch to our local API. Note that without
    // authentication headers, this endpoints normally returns 401 Unauthorized.
    // For this example to work without a full login system built, we might simulate it.
    // However, let's wire it up to make the call and show the layout.
    
    // Simulate generic load if not authenticated yet or real load if you use headers
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const res = await fetch("http://127.0.0.1:8000/api/profile/", { headers });
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
        } else if (res.status === 401) {
          // Provide placeholder data if user isn't logged in yet so the UI shows up
          setProfile({
            user: { id: 1, username: "Guest User", email: "", first_name: "", last_name: "" },
            username: "Guest User",
            avatar: null,
            brainlycoins: 0
          });
        } else {
          setError("Failed to load profile. Backend might be down.");
        }
      } catch (e: any) {
        setError("Error connecting to server.");
        // Mock fallback for UI demo
        setProfile({
          user: { id: 1, username: "Guest User", email: "", first_name: "", last_name: "" },
          username: "Guest User",
          avatar: null,
          brainlycoins: 0
        });
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 500 * 1024) {
      alert("Avatar image size must be under 500KB!");
      return;
    }

    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const token = localStorage.getItem("access_token");
      const headers: HeadersInit = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const res = await fetch("http://127.0.0.1:8000/api/profile/", {
        method: "PATCH",
        headers,
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setProfile(data);
      } else {
        const errData = await res.json();
        setError(errData.avatar?.[0] || "Upload failed.");
        alert(errData.avatar?.[0] || "Upload failed.");
      }
    } catch (e: any) {
      setError("Error connecting to server.");
    } finally {
      setUploading(false);
    }
  };

  if (loading) return <div className="prof-main"><div className="prof-loading">Loading Profile...</div></div>;

  const avatarUrl = profile?.avatar 
    ? (profile.avatar.startsWith('http') ? profile.avatar : `http://127.0.0.1:8000${profile.avatar}`)
    : "/default-avatar.png";

  return (
    <div className="prof-main">
      <div className="prof-card fade-up">
        {error && <div className="prof-error">{error}</div>}
        
        <div className="prof-header">
          <div className="prof-avatar-wrapper">
            <img src={avatarUrl} alt="Avatar" className="prof-avatar" />
            <label className="prof-avatar-upload">
              {uploading ? "..." : "+"}
              <input type="file" accept="image/*" onChange={handleAvatarChange} disabled={uploading} />
            </label>
          </div>
          <div className="prof-info">
            {isEditing ? (
              <div className="prof-edit-row">
                <input 
                  type="text" 
                  className="prof-edit-input" 
                  value={editUsername} 
                  onChange={(e) => setEditUsername(e.target.value)} 
                />
                <button className="prof-save-btn" onClick={handleSaveProfile} disabled={uploading}>{uploading ? "..." : "Save"}</button>
                <button className="prof-cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            ) : (
              <h1 className="prof-username">
                {profile?.username}
                <button className="prof-edit-icon" onClick={() => { setEditUsername(profile?.username || ""); setIsEditing(true); }}>✎</button>
              </h1>
            )}
            <p className="prof-email">{profile?.user.email || "No email"}</p>
          </div>
        </div>

        <div className="prof-stats">
          <div className="prof-stat">
            <div className="prof-stat-val">{profile?.brainlycoins}</div>
            <div className="prof-stat-lbl">BrainlyCoins</div>
          </div>
          <div className="prof-stat">
            <div className="prof-stat-val">Lvl 1</div>
            <div className="prof-stat-lbl">Current Tier</div>
          </div>
        </div>
      </div>
    </div>
  );
}
