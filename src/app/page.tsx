import Cards from "@/components/fragments/Cards";

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
      <div className="flex flex-wrap justify-center px-1 pt-4">
        <Cards data={data} />
        <div className="bg-gray-600 p-3 rounded-full fixed bottom-6 end-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="18"
            viewBox="0 0 576 512"
          >
            <path
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
