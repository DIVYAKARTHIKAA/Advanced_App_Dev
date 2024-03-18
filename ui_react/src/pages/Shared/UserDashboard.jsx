import React from 'react';

const UserDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">User Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Recent Orders</h2>
          <div className="flex flex-col gap-4">
           
              <div className="flex items-center gap-2">
                <img src="data:image/jpeg;base64,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" alt="Product Image" className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">Photo Frame</h3>
                  <p className="text-gray-600">Order Date: January 1, 2024</p>
                  <p className="text-gray-600">Price: $60</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiagHEcMtUQkfy3RAGBpEjs77AnqdjWGgeg&usqp=CAU" alt="Product Image" className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">Clock</h3>
                  <p className="text-gray-600">Order Date: January 10, 2024</p>
                  <p className="text-gray-600">Price: $30</p>
                </div>
              </div>
          
              <div className="flex items-center gap-2">
                <img src="data:image/jpeg;base64,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" alt="Product Image" className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">Pen</h3>
                  <p className="text-gray-600">Order Date: January 20, 2024</p>
                  <p className="text-gray-600">Price: $40</p>
                </div>
              </div>
          
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Account Information</h2>
          <div className="divide-y divide-gray-200">
            <div className="account-item p-4 hover:bg-blue-100 transition duration-300">
              <p className="text-gray-600">Username: Ram</p>
              <p className="text-gray-600">Email: Ram@gmail.com</p>
              <p className="text-gray-600">Membership: Premium</p>
            </div>
            <hr className="my-4" />
            <div className="account-item p-4 hover:bg-blue-100 transition duration-300">
              <p className="text-gray-600">Username: Radha</p>
              <p className="text-gray-600">Email: Radha@gmail.com</p>
              <p className="text-gray-600">Membership: Premium</p>
            </div>
            <hr className="my-4" />
            <div className="account-item p-4 hover:bg-blue-100 transition duration-300">
              <p className="text-gray-600">Username: Daisy</p>
              <p className="text-gray-600">Email: Daisy@gmail.com</p>
              <p className="text-gray-600">Membership: Premium</p>
            </div>
            <hr className="my-4" />
          </div>
        </div>


        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <div>
            <p className="text-gray-600">Notifications: On</p>
            <p className="text-gray-600">Theme: Light</p>
            <p className="text-gray-600">Language: English</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
