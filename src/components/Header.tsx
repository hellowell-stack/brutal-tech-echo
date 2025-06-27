
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useProfile } from '@/hooks/useProfile';

const Header = () => {
  const { user, signOut } = useAuth();
  const { data: profile } = useProfile(user?.id);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-white border-b-4 border-black sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold font-space-grotesk">
            TechBlog
          </Link>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm">
                  Welcome, {profile?.full_name || user.email}!
                </span>
                <button 
                  onClick={handleSignOut}
                  className="neo-button-sm"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/auth" className="neo-button">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
