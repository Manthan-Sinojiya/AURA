import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Package, Heart, LogOut, Settings } from 'lucide-react';

const UserDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (!role) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="animate-fade-in py-12 md:py-24 bg-bg-secondary min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-3xl font-serif mb-2">My Account</h1>
            <p className="text-muted">Welcome back, User!</p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors">
            <LogOut size={18} /> Sign Out
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="bg-white dark:bg-zinc-900 shadow-sm p-6 flex flex-col gap-2">
              <button className="flex items-center gap-3 text-left w-full p-3 bg-bg-secondary font-medium text-primary border-l-2 border-primary">
                <User size={18} /> Profile Overview
              </button>
              <button className="flex items-center gap-3 text-left w-full p-3 text-muted hover:bg-bg-secondary hover:text-primary transition-colors">
                <Package size={18} /> Order History
              </button>
              <button onClick={() => navigate('/wishlist')} className="flex items-center gap-3 text-left w-full p-3 text-muted hover:bg-bg-secondary hover:text-primary transition-colors">
                <Heart size={18} /> Wishlist
              </button>
              <button className="flex items-center gap-3 text-left w-full p-3 text-muted hover:bg-bg-secondary hover:text-primary transition-colors">
                <Settings size={18} /> Account Settings
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="bg-white dark:bg-zinc-900 shadow-sm p-8">
              <h3 className="text-xl font-serif mb-6 border-b border-border pb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted mb-1">Full Name</p>
                  <p className="font-medium">User Customer</p>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Email Address</p>
                  <p className="font-medium">user@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Phone Number</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <button className="mt-8 btn btn-outline py-2 px-6">Edit Profile</button>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 shadow-sm p-8">
              <h3 className="text-xl font-serif mb-6 border-b border-border pb-4">Recent Orders</h3>
              <div className="text-center py-8">
                <Package size={48} className="mx-auto text-border mb-4" />
                <p className="text-muted mb-4">You haven't placed any orders yet.</p>
                <button onClick={() => navigate('/menu')} className="btn btn-primary">Start Shopping</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default UserDashboard;
