import { Bell, ChevronDown, MessageCircle, Search, User } from "lucide-react";

export function Header2() {
  return (
    <div>
        <header className="w-full h-31 bg-transparent justify-center flex">
          <div className="flex items-center h-full gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="3.75rem" height="3.75rem" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="#E60023"></circle><path fill="#FFF" d="M24.4439087,11.4161377c-8.6323242,0-13.2153931,5.7946167-13.2153931,12.1030884	c0,2.9338379,1.5615234,6.5853882,4.0599976,7.7484131c0.378418,0.1762085,0.581543,0.1000366,0.668457-0.2669067	c0.0668945-0.2784424,0.4038086-1.6369019,0.5553589-2.2684326c0.0484619-0.2015381,0.0246582-0.3746338-0.1384277-0.5731201	c-0.8269653-1.0030518-1.4884644-2.8461304-1.4884644-4.5645752c0-4.4115601,3.3399658-8.6799927,9.0299683-8.6799927	c4.9130859,0,8.3530884,3.3484497,8.3530884,8.1369019c0,5.4099731-2.7322998,9.1584473-6.2869263,9.1584473	c-1.9630737,0-3.4330444-1.6238403-2.9615479-3.6153564c0.5654297-2.3769531,1.6569214-4.9415283,1.6569214-6.6584473	c0-1.5354004-0.8230591-2.8169556-2.5299683-2.8169556c-2.006958,0-3.6184692,2.0753784-3.6184692,4.8569336	c0,1.7700195,0.5984497,2.9684448,0.5984497,2.9684448s-1.9822998,8.3815308-2.3453979,9.9415283	c-0.4019775,1.72229-0.2453003,4.1416016-0.0713501,5.7233887l0,0c0.4511108,0.1768799,0.9024048,0.3537598,1.3687744,0.4981079l0,0	c0.8168945-1.3278198,2.0349731-3.5056763,2.4864502-5.2422485c0.2438354-0.9361572,1.2468872-4.7546387,1.2468872-4.7546387	c0.6515503,1.2438965,2.5561523,2.296936,4.5831299,2.296936c6.0314941,0,10.378418-5.546936,10.378418-12.4400024	C36.7738647,16.3591919,31.3823242,11.4161377,24.4439087,11.4161377z"></path>
          </svg>
          <div className="h-14 w-22 bg-black rounded-4xl flex justify-center items-center text-white">
            <strong className="rounded-none">Home</strong>
          </div>
          <div className="h-14 w-22  rounded-4xl flex justify-center items-center text-black">
            <strong className="rounded-none">Today</strong>
          </div>
          <div className="flex bg-zinc-100 w-340 h-10 rounded-4xl items-center ">
            <div className="gap-3 flex px-7 text-zinc-500">
              <Search />
              <span>Search</span>
            </div>
          </div>
          <div className="text-zinc-500 flex gap-4 text-3xl">
            <Bell />
            <MessageCircle />
            <User />
            <ChevronDown />
          </div>
          </div>

        </header>
    </div>
  );
}