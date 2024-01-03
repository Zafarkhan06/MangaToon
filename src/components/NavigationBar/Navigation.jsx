import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
export default function NavigationBar() {
  return (
    <section>
      <div className="bg-[#0b0a0d] py-2 px-20 flex justify-between items-center">
        <img
          src="/images/logo-mangatoon.png"
          alt="MangaToon Logo"
          className="w-11 h-11"
        />
        <div className="flex items-center justify-between w-2/6 relative">
          <input
            type="text"
            placeholder="Search"
            className="py-1 px-3 w-full placeholder:text-white rounded-md bg-[#17151b] border border-[#1b181f] text-white"
          />
          <IconButton
            aria-label="search"
            className="absolute right-12 transform"
          >
            <SearchIcon className="text-[#455255]"/>
          </IconButton>
        </div>
      </div>
      <div className="bg-[#913fe2] px-24">
        <ul className="flex justify-start gap-7 text-white font-normal  text-sm items-center">
            <li className="hover:bg-[#622b99] py-3 px-2">Home</li>
            <li className="hover:bg-[#622b99] py-3 px-2">Bookmarks</li>
            <li className="hover:bg-[#622b99] py-3 px-2">Comics</li>
            <li className="hover:bg-[#622b99] py-3 px-2">Recruitment</li>
        </ul>
      </div>
    </section>
  );
}
