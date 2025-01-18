import * as Tabs from '@radix-ui/react-tabs';
import { Bell, CreditCard, User } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className=" w-full">
      <h1 className="text-2xl font-semibold mb-2">General Settings</h1>
      <p className="text-gray-500 mb-6">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>

      <Tabs.Root defaultValue="account" className="w-full ">
        <Tabs.List className="flex  mb-6 gap-4">
          <Tabs.Trigger
            value="account"
            className="flex items-center  px-4 py-2 gap-2 text-white data-[state=active]:text-[#04C770] data-[state=active]:border-b-2 data-[state=active]:border-[#04C770]"
          >
            <User size={20} />
            Account
          </Tabs.Trigger>
          <Tabs.Trigger
            value="billing"
            className="flex items-center  px-4 py-2 gap-2 text-white data-[state=active]:text-[#04C770] data-[state=active]:border-b-2 data-[state=active]:border-[#04C770]"
          >
            <CreditCard size={20} />
            Billing
          </Tabs.Trigger>
          <Tabs.Trigger
            value="notification"
            className="flex items-center  px-4 py-2 gap-2 text-white data-[state=active]:text-[#04C770] data-[state=active]:border-b-2 data-[state=active]:border-[#04C770]"
          >
            <Bell size={20} />
            Notification
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="account" className="outline-none">
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <img
                src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0  text-white p-1 rounded-full">
                <User size={16} />
              </button>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Carlie John</h2>
              <button className="text-white mt-2">Upload new picture</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div>
              <h3 className="font-medium mb-4">Basic Information</h3>
              <p className="text-gray-500 text-sm mb-4">Lorem ipsum is simply dummy text.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Example@gmail.com"
                    className="w-full p-2 border rounded-lg bg-white"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">More Information</h3>
              <p className="text-gray-500 text-sm mb-4">Lorem ipsum is simply dummy text.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+12 3456 7890"
                    className="w-full p-2 border rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Role</label>
                  <input
                    type="text"
                    placeholder="Designer"
                    className="w-full p-2 border rounded-lg bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm mb-1">About Biography</label>
              <textarea
                placeholder="Say something about you..."
                rows={4}
                className="w-full p-2 border rounded-lg bg-white"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm mb-1">Location</label>
                <input
                  type="text"
                  placeholder="Your Location"
                  className="w-full p-2 border rounded-lg bg-white"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Website</label>
                <input
                  type="url"
                  placeholder="Example.com"
                  className="w-full p-2 border rounded-lg bg-white"
                />
              </div>
            </div>
          </div>

          <button className="
           text-white px-6 py-2 rounded-lg">
            Save Changes
          </button>
        </Tabs.Content>

        <Tabs.Content value="billing" className="outline-none">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">Current Plan</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Pro Plan</p>
                  <p className="text-gray-500">$29/month</p>
                </div>
                <button className="">Change Plan</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <CreditCard className="text-gray-500" size={24} />
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-gray-500">Expires 12/24</p>
                  </div>
                </div>
                <button className="">Edit</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">Billing History</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">Dec 1, 2023</p>
                      <p className="text-gray-500">Pro Plan - Monthly</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$29.00</p>
                      <button className="">Download</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="notification" className="outline-none">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">Email Notifications</h3>
              <div className="space-y-4">
                {['Comments', 'Account activity', 'Newsletter', 'Product updates'].map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item}</p>
                      <p className="text-gray-500">Receive notifications about {item.toLowerCase()}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer bg-white" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">Push Notifications</h3>
              <div className="space-y-4">
                {['Direct messages', 'Mentions', 'Reminders'].map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item}</p>
                      <p className="text-gray-500">Receive notifications for {item.toLowerCase()}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer bg-white" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default SettingsPage;