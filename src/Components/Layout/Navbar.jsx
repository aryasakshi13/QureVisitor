const Navbar = () =>{
    return (
        <div>
              <nav>
                <div className="w-full bg-white shadow-md px-8 py-6 relative flex items-center justify-between ">
                    {/* Logo */}
                    <div> <img src="" alt="logo" className="h-8"></img></div>
                   

                    {/* nav List */}
                    <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-8">
                        <li className="hover:text-orange-600 cursor-pointer font-bold" >Home</li> 
                        <li className="hover:text-orange-600 cursor-pointer font-bold">Feature</li>
                        <li className="hover:text-orange-600 cursor-pointer font-bold">Pricing </li>
                        <li className="hover:text-orange-600 cursor-pointer font-bold">Contact</li>
                    </ul>
                    <button className="bg-orange-600 rounded-lg px-4 py-2">Login</button>


                </div>
              </nav>
        </div>
    )
}
export default Navbar;