import Cards from "@/components/fragments/Cards";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

export default function Home() {
  const data = [
    {
      sku: 101,
      bookName: "Cantik Itu Luka - Eka Kurniawan",
      link: "https://drive.google.com/file/d/1IAuxhflFbztSXqqpwvnyV9KL7V4OzKel/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/101.jpg",
    },
    {
      sku: 102,
      bookName: "Cinderella In Paris by Sari Musdar",
      link: "https://drive.google.com/file/d/1lmnicm0_7yle0EiG7aMbKTgyaScMiWBx/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/102.jpg",
    },
    {
      sku: 103,
      bookName: "Back Into You by Teresa Bertha",
      link: "https://drive.google.com/file/d/1Hz_JWC8tOKr01U7Sg84mlo57YFuvtduq/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/103.jpg",
    },
    {
      sku: 104,
      bookName: "Re dan peREmpuan",
      link: "https://drive.google.com/file/d/1HEPzCaSwdc2keZS-H0f_KhNySPmX-lPX/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/104.jpg",
    },
    {
      sku: 105,
      bookName: "Berani Bahagia by Ichiro Kishimi, Fumitake Koga",
      link: "https://drive.google.com/file/d/1LKuZMMaYEGcDdkPoEHa0Co94o5cuhy4C/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/105.jpg",
    },
    {
      sku: 106,
      bookName: "Filosofi Teras by Henry Manampiring",
      link: "https://drive.google.com/file/d/1bmchmLUsxdAvsZ2sqn6Xc12pYHUr_rWe/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/106.jpg",
    },
    {
      sku: 107,
      bookName:
        "Funiculi Funicula Before the Coffee Gets Cold by Toshikazu Kawaguchi",
      link: "https://drive.google.com/file/d/16crDQ35YlPVnRH7Ah1BBFHq2Osyr96Zm/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/107.jpg",
    },
    {
      sku: 108,
      bookName:
        "Funiculi Funicula 2 Kisah-Kisah Yang Baru Terungkap by Toshikazu Kawaguchi",
      link: "https://drive.google.com/file/d/1ecKXcHXX9ser6b6UG1Z0yiKsgihyOyTC/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/108.jpg",
    },
    {
      sku: 109,
      bookName: "Berani Tidak Disukai by Ichiro Kishimi, Fumitake Koga",
      link: "https://drive.google.com/file/d/19gkC_RzbPRLWrvXMhuDAPMe3ftRuf9X_/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/109.jpg",
    },
    {
      sku: 110,
      bookName: "Sebuah Seni untuk Bersikap Bodo Amat by Mark Manson",
      link: "https://drive.google.com/file/d/1kFx95k7zKYTCk9fnedZ-L9pNtR3z7P7v/view?usp=drive_link",
      linkPage:
        "https://raw.githubusercontent.com/Zunnazif/halaman-produk/main/halaman-produk/110.jpg",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <Cards data={data} />
        <div className="bg-gray-600 w-10 h-10 rounded-full fixed bottom-6 end-6 flex justify-center items-center">
          <ShoppingCartRoundedIcon />
          <span className="bg-red-700 fixed bottom-[52px] end-5 w-5 h-5 rounded-full flex justify-center items-center">
            <p className="text-xs font-semibold text-white">1</p>
          </span>
        </div>
      </div>
    </>
  );
}
