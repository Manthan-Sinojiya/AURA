import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, ShoppingBag, DollarSign, Package, LogOut, Plus, Edit, Trash2, CheckCircle, Clock, XCircle } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats] = useState({
    totalUsers: 145,
    totalOrders: 320,
    totalRevenue: 2450050.00,
    products: 42
  });

  const [orders, setOrders] = useState([
    { id: '#ORD-001', customer: 'Jane Doe', date: 'Oct 24, 2026', items: 'Banarasi Silk Saree', total: 12500, status: 'Completed' },
    { id: '#ORD-002', customer: 'John Smith', date: 'Oct 23, 2026', items: 'Embroidered Anarkali Kurti', total: 4500, status: 'Processing' },
    { id: '#ORD-003', customer: 'Alice Johnson', date: 'Oct 21, 2026', items: 'Bridal Lehenga Choli', total: 32000, status: 'Shipped' },
    { id: '#ORD-004', customer: 'Priya Sharma', date: 'Oct 20, 2026', items: 'Georgette Ruffle Saree', total: 8500, status: 'Pending' }
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: "Banarasi Silk Saree", category: "Sarees", price: 12500.00, stock: 15 },
    { id: 2, name: "Embroidered Anarkali Kurti", category: "Kurtis", price: 4500.00, stock: 24 },
    { id: 3, name: "Bridal Lehenga Choli", category: "Lehengas", price: 32000.00, stock: 5 },
    { id: 4, name: "Georgette Ruffle Saree", category: "Sarees", price: 8500.00, stock: 12 },
  ]);

  const [customers] = useState([
    { id: 'CUST-001', name: 'Jane Doe', email: 'jane@example.com', phone: '+91 9876543210', orders: 5, spent: 45000 },
    { id: 'CUST-002', name: 'John Smith', email: 'john@example.com', phone: '+91 8765432109', orders: 2, spent: 12000 },
    { id: 'CUST-003', name: 'Alice Johnson', email: 'alice@example.com', phone: '+91 7654321098', orders: 8, spent: 105000 },
    { id: 'CUST-004', name: 'Priya Sharma', email: 'priya@example.com', phone: '+91 6543210987', orders: 1, spent: 8500 },
  ]);

  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', category: 'Sarees', price: '', stock: '', description: '' });

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/login');
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      id: products.length + 1,
      name: newProduct.name,
      category: newProduct.category,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock, 10)
    };
    setProducts([...products, product]);
    setIsAddingProduct(false);
    setNewProduct({ name: '', category: 'Sarees', price: '', stock: '', description: '' });
  };

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed': return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit gap-1"><CheckCircle size={12}/> Completed</span>;
      case 'Processing': return <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit gap-1"><Clock size={12}/> Processing</span>;
      case 'Shipped': return <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit gap-1"><Package size={12}/> Shipped</span>;
      case 'Pending': return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit gap-1"><Clock size={12}/> Pending</span>;
      case 'Cancelled': return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit gap-1"><XCircle size={12}/> Cancelled</span>;
      default: return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">{status}</span>;
    }
  };

  return (
    <div className="animate-fade-in bg-bg-secondary min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-serif">Admin Portal</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-primary hover:text-accent font-medium bg-white dark:bg-zinc-900 px-5 py-2.5 rounded shadow-sm transition-colors border border-border">
            <LogOut size={18} /> Logout
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-zinc-900 shadow-sm flex flex-col overflow-hidden border border-border sticky top-24">
              <button onClick={() => setActiveTab('dashboard')} className={`text-left px-6 py-4 font-medium transition-colors flex items-center gap-3 border-b border-border ${activeTab === 'dashboard' ? 'bg-primary text-secondary' : 'hover:bg-bg-secondary'}`}>
                <DollarSign size={18} /> Dashboard
              </button>
              <button onClick={() => setActiveTab('orders')} className={`text-left px-6 py-4 font-medium transition-colors flex items-center gap-3 border-b border-border ${activeTab === 'orders' ? 'bg-primary text-secondary' : 'hover:bg-bg-secondary'}`}>
                <ShoppingBag size={18} /> Sell History
              </button>
              <button onClick={() => setActiveTab('products')} className={`text-left px-6 py-4 font-medium transition-colors flex items-center gap-3 border-b border-border ${activeTab === 'products' ? 'bg-primary text-secondary' : 'hover:bg-bg-secondary'}`}>
                <Package size={18} /> Manage Products
              </button>
              <button onClick={() => setActiveTab('customers')} className={`text-left px-6 py-4 font-medium transition-colors flex items-center gap-3 ${activeTab === 'customers' ? 'bg-primary text-secondary' : 'hover:bg-bg-secondary'}`}>
                <Users size={18} /> User Details
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            
            {/* 1. Dashboard Overview */}
            {activeTab === 'dashboard' && (
              <div className="space-y-8 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white dark:bg-zinc-900 p-6 shadow-sm flex flex-col border-t-4 border-primary">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-muted text-sm uppercase tracking-wider font-semibold">Total Revenue</p>
                      <div className="w-10 h-10 bg-bg-secondary flex items-center justify-center rounded-full text-primary"><DollarSign size={20} /></div>
                    </div>
                    <h3 className="text-3xl font-serif">₹{stats.totalRevenue.toLocaleString('en-IN')}</h3>
                    <p className="text-sm text-green-600 mt-2 font-medium">+12.5% from last month</p>
                  </div>
                  
                  <div className="bg-white dark:bg-zinc-900 p-6 shadow-sm flex flex-col border-t-4 border-primary">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-muted text-sm uppercase tracking-wider font-semibold">Total Orders</p>
                      <div className="w-10 h-10 bg-bg-secondary flex items-center justify-center rounded-full text-primary"><ShoppingBag size={20} /></div>
                    </div>
                    <h3 className="text-3xl font-serif">{stats.totalOrders}</h3>
                    <p className="text-sm text-green-600 mt-2 font-medium">+8.2% from last month</p>
                  </div>
                  
                  <div className="bg-white dark:bg-zinc-900 p-6 shadow-sm flex flex-col border-t-4 border-primary">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-muted text-sm uppercase tracking-wider font-semibold">Customers</p>
                      <div className="w-10 h-10 bg-bg-secondary flex items-center justify-center rounded-full text-primary"><Users size={20} /></div>
                    </div>
                    <h3 className="text-3xl font-serif">{stats.totalUsers}</h3>
                    <p className="text-sm text-green-600 mt-2 font-medium">+24 new this week</p>
                  </div>
                  
                  <div className="bg-white dark:bg-zinc-900 p-6 shadow-sm flex flex-col border-t-4 border-primary">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-muted text-sm uppercase tracking-wider font-semibold">Products</p>
                      <div className="w-10 h-10 bg-bg-secondary flex items-center justify-center rounded-full text-primary"><Package size={20} /></div>
                    </div>
                    <h3 className="text-3xl font-serif">{stats.products}</h3>
                    <p className="text-sm text-muted mt-2 font-medium">In 3 categories</p>
                  </div>
                </div>
                
                {/* Recent Summary */}
                <div className="bg-white dark:bg-zinc-900 p-8 shadow-sm border border-border">
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
                    <h3 className="text-xl font-serif">Recent Sales Summary</h3>
                    <button onClick={() => setActiveTab('orders')} className="text-primary hover:text-accent text-sm font-medium transition-colors">View All Orders &rarr;</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="text-muted text-sm uppercase tracking-wider border-b border-border">
                          <th className="pb-4 font-semibold">Order ID</th>
                          <th className="pb-4 font-semibold">Items</th>
                          <th className="pb-4 font-semibold">Date</th>
                          <th className="pb-4 font-semibold text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {orders.slice(0, 3).map((order, idx) => (
                          <tr key={idx} className="border-b border-border last:border-0 hover:bg-bg-secondary transition-colors">
                            <td className="py-4 font-medium">{order.id}</td>
                            <td className="py-4 text-muted">{order.items}</td>
                            <td className="py-4">{order.date}</td>
                            <td className="py-4 text-right font-medium text-primary">₹{order.total.toLocaleString('en-IN')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Orders & Sell History */}
            {activeTab === 'orders' && (
              <div className="bg-white dark:bg-zinc-900 p-8 shadow-sm border border-border animate-fade-in">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
                  <h3 className="text-2xl font-serif">Order Status & Sell History</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-muted text-sm uppercase tracking-wider border-b border-border">
                        <th className="pb-4 font-semibold">Order ID</th>
                        <th className="pb-4 font-semibold">Customer</th>
                        <th className="pb-4 font-semibold">Product Info</th>
                        <th className="pb-4 font-semibold">Date</th>
                        <th className="pb-4 font-semibold">Total Amount</th>
                        <th className="pb-4 font-semibold">Status Update</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {orders.map((order, idx) => (
                        <tr key={idx} className="border-b border-border last:border-0 hover:bg-bg-secondary transition-colors">
                          <td className="py-5 font-medium">{order.id}</td>
                          <td className="py-5">{order.customer}</td>
                          <td className="py-5 max-w-[200px] truncate" title={order.items}>{order.items}</td>
                          <td className="py-5">{order.date}</td>
                          <td className="py-5 font-semibold">₹{order.total.toLocaleString('en-IN')}</td>
                          <td className="py-5">
                            <div className="flex flex-col gap-2 items-start">
                              {getStatusBadge(order.status)}
                              <select 
                                value={order.status}
                                onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                                className="text-xs border border-border bg-white dark:bg-zinc-900 p-1 rounded outline-none focus:border-primary mt-1"
                              >
                                <option value="Pending">Mark Pending</option>
                                <option value="Processing">Mark Processing</option>
                                <option value="Shipped">Mark Shipped</option>
                                <option value="Completed">Mark Completed</option>
                                <option value="Cancelled">Mark Cancelled</option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. Manage Products */}
            {activeTab === 'products' && (
              <div className="space-y-8 animate-fade-in">
                {isAddingProduct ? (
                  <div className="bg-white dark:bg-zinc-900 p-8 shadow-sm border border-border">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
                      <h3 className="text-2xl font-serif">Add New Product</h3>
                      <button onClick={() => setIsAddingProduct(false)} className="text-muted hover:text-primary transition-colors">Cancel</button>
                    </div>
                    <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">Product Name</label>
                        <input type="text" required value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="form-control" placeholder="e.g. Royal Blue Silk Saree" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Category</label>
                        <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} className="form-control" required>
                          <option value="Sarees">Sarees</option>
                          <option value="Kurtis">Kurtis</option>
                          <option value="Lehengas">Lehengas</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Price (₹)</label>
                        <input type="number" required min="0" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} className="form-control" placeholder="e.g. 5500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Stock Quantity</label>
                        <input type="number" required min="0" value={newProduct.stock} onChange={e => setNewProduct({...newProduct, stock: e.target.value})} className="form-control" placeholder="e.g. 50" />
                      </div>
                      <div className="md:col-span-2 mt-4">
                        <button type="submit" className="btn btn-primary w-full md:w-auto">Save Product</button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="bg-white dark:bg-zinc-900 p-8 shadow-sm border border-border">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
                      <h3 className="text-2xl font-serif">Product Inventory</h3>
                      <button onClick={() => setIsAddingProduct(true)} className="btn btn-primary py-2 px-4 flex items-center gap-2 text-sm">
                        <Plus size={16} /> Add Product
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="text-muted text-sm uppercase tracking-wider border-b border-border">
                            <th className="pb-4 font-semibold">ID</th>
                            <th className="pb-4 font-semibold">Name</th>
                            <th className="pb-4 font-semibold">Category</th>
                            <th className="pb-4 font-semibold">Price</th>
                            <th className="pb-4 font-semibold">Stock</th>
                            <th className="pb-4 font-semibold text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          {products.map((product, idx) => (
                            <tr key={idx} className="border-b border-border last:border-0 hover:bg-bg-secondary transition-colors">
                              <td className="py-4 font-medium">#{product.id}</td>
                              <td className="py-4 font-medium">{product.name}</td>
                              <td className="py-4"><span className="bg-bg-secondary border border-border px-3 py-1 rounded-full text-xs font-medium">{product.category}</span></td>
                              <td className="py-4 text-primary">₹{product.price.toLocaleString('en-IN')}</td>
                              <td className="py-4">
                                <span className={`${product.stock < 10 ? 'text-red-600 font-bold' : 'text-green-600 font-medium'}`}>{product.stock} units</span>
                              </td>
                              <td className="py-4 text-right">
                                <button className="text-primary hover:text-accent mr-3 transition-colors" title="Edit"><Edit size={16} /></button>
                                <button className="text-red-500 hover:text-red-700 transition-colors" title="Delete"><Trash2 size={16} /></button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 4. Customers */}
            {activeTab === 'customers' && (
              <div className="bg-white dark:bg-zinc-900 p-8 shadow-sm border border-border animate-fade-in">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
                  <h3 className="text-2xl font-serif">User Details & Customers</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-muted text-sm uppercase tracking-wider border-b border-border">
                        <th className="pb-4 font-semibold">Customer ID</th>
                        <th className="pb-4 font-semibold">Name</th>
                        <th className="pb-4 font-semibold">Contact Info</th>
                        <th className="pb-4 font-semibold">Total Orders</th>
                        <th className="pb-4 font-semibold text-right">Total Spent</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {customers.map((customer, idx) => (
                        <tr key={idx} className="border-b border-border last:border-0 hover:bg-bg-secondary transition-colors">
                          <td className="py-4 font-medium">{customer.id}</td>
                          <td className="py-4 font-medium text-lg">{customer.name}</td>
                          <td className="py-4">
                            <div className="flex flex-col">
                              <span>{customer.email}</span>
                              <span className="text-muted text-xs mt-1">{customer.phone}</span>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className="bg-primary text-secondary px-3 py-1 rounded-full text-xs font-bold">{customer.orders}</span>
                          </td>
                          <td className="py-4 text-right font-medium text-primary text-base">₹{customer.spent.toLocaleString('en-IN')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
