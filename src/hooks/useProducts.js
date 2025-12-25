function useProducts() {
  const products = [
    {
      id: 1,
      name: "Sepatu Jordan original black white",
      price: 2500000,
      image: "/image/sepatu.jpg",
      description: 
      "Sepatu Jordan original black white adalah sepatu berkualitas tinggi yang dirancang untuk kenyamanan dan gaya. Dengan desain klasik berwarna hitam dan putih, sepatu ini cocok untuk berbagai kesempatan, baik untuk olahraga maupun aktivitas sehari-hari. Terbuat dari bahan premium, sepatu ini menawarkan daya tahan yang luar biasa serta dukungan optimal untuk kaki Anda."
    },
    {
      id: 2,
      name: "VANS Sepatu Sneakers Unisex KNU SKOOL VN000CS0BRO ORIGINAL",
      price: 959000,
      image: "/image/vans1.png",
      description:
      "VANS Sepatu Sneakers Unisex KNU SKOOL VN000CS0BRO ORIGINAL adalah pilihan sempurna bagi para penggemar gaya kasual dan streetwear. Dengan desain ikonik dari VANS, sepatu ini menampilkan kombinasi warna yang menarik dan bahan berkualitas tinggi untuk kenyamanan maksimal. Cocok untuk berbagai aktivitas, sepatu ini memberikan tampilan yang trendi sekaligus fungsional."
    },
    {
      id: 3,
      name: "NIKE Sepatu Tenis WMNS ZOOM GP CHALLENGE 1 PRM HC HQ2551600 ORIGINAL",
      price: 2489000,
      image: "/image/nike5.png",
      description:
      "NIKE Sepatu Tenis WMNS ZOOM GP CHALLENGE 1 PRM HC HQ2551600 ORIGINAL adalah sepatu tenis premium yang dirancang khusus untuk wanita yang mengutamakan performa di lapangan. Dengan teknologi Zoom Air yang inovatif, sepatu ini memberikan responsivitas dan kenyamanan luar biasa saat bermain. Desainnya yang stylish juga membuatnya cocok untuk digunakan di luar lapangan."
    },
    {
      id: 4,
      name: "Adidas Samba OG White Gum",
      price: 920000,
      image: "/image/samba1.png",
      description:
      "Adidas Samba OG White Gum adalah sepatu sneakers klasik yang menggabungkan gaya retro dengan kenyamanan modern. Dengan warna putih bersih dan sol karet gum yang ikonik, sepatu ini menawarkan tampilan yang segar dan serbaguna. Terbuat dari bahan berkualitas tinggi, Adidas Samba OG cocok untuk berbagai kesempatan, mulai dari aktivitas sehari-hari hingga acara santai."
    },
    {
      id: 5,
      name: "ADIDAS Sepatu Tenis DROP SHOT JK1220 ORIGINAL",
      price: 950000,
      image: "/image/jk1220.png",
      description:
      "ADIDAS Sepatu Tenis DROP SHOT JK1220 ORIGINAL adalah sepatu tenis yang dirancang untuk memberikan performa optimal di lapangan. Dengan teknologi canggih dari Adidas, sepatu ini menawarkan stabilitas, dukungan, dan kenyamanan yang dibutuhkan oleh para pemain tenis. Desainnya yang modern dan stylish juga membuatnya cocok untuk digunakan di luar lapangan."
    },
    {
      id: 6,
      name: "ADIDAS Sepatu Hiking TERREX SKYCHASER GORE-TEX IH1093 ORIGINAL",
      price: 2300000,
      image: "/image/hiking.png",
      description:
      "ADIDAS Sepatu Hiking TERREX SKYCHASER GORE-TEX IH1093 ORIGINAL adalah sepatu hiking premium yang dirancang untuk petualangan di alam bebas. Dengan teknologi GORE-TEX yang tahan air, sepatu ini menjaga kaki Anda tetap kering dan nyaman dalam berbagai kondisi cuaca. Desainnya yang kokoh dan sol yang tahan lama memberikan traksi optimal di berbagai medan, menjadikannya pilihan ideal untuk para pendaki dan pecinta alam."
    },
    {
      id: 7,
      name: "ADIDAS Sepatu Sneakers Unisex SAMBA MILLENIUM ID3922 ORIGINAL",
      price: 1150000,
      image: "/image/samba2.png",
      description:
      "ADIDAS Sepatu Sneakers Unisex SAMBA MILLENIUM ID3922 ORIGINAL adalah sepatu sneakers ikonik yang menggabungkan gaya klasik dengan sentuhan modern. Dengan desain yang timeless dan bahan berkualitas tinggi, sepatu ini menawarkan kenyamanan dan daya tahan yang luar biasa. Cocok untuk berbagai kesempatan, sepatu ini memberikan tampilan yang stylish dan fungsional bagi penggunanya."
    },
    {
      id: 8,
      name: "Adidas Handball Spezial Light Blue",
      price: 2264000,
      image: "/image/samba3.png",
      description:
      "Adidas Handball Spezial Light Blue adalah sepatu olahraga yang dirancang khusus untuk para pemain handball. Dengan warna biru muda yang segar dan desain yang ergonomis, sepatu ini menawarkan kenyamanan dan dukungan optimal selama pertandingan. Terbuat dari bahan berkualitas tinggi, Adidas Handball Spezial memberikan performa terbaik di lapangan sekaligus tampilan yang stylish."
    },
    {
      id: 9,
      name: "NIKE Sepatu Tenis ZOOM VAPOR 12 HC PRM IB6555300 ORIGINAL",
      price: 2849000,
      image: "/image/nike.png",
      description:
      "NIKE Sepatu Tenis ZOOM VAPOR 12 HC PRM IB6555300 ORIGINAL adalah sepatu tenis kelas atas yang dirancang untuk memberikan performa maksimal di lapangan. Dengan teknologi Zoom Air yang canggih, sepatu ini menawarkan responsivitas dan kenyamanan luar biasa saat bermain. Desainnya yang modern dan stylish juga membuatnya cocok untuk digunakan di luar lapangan."
    },
    {
      id: 10,
      name: "NIKE Sepatu Sneakers Pria COURT VISION LOW NEXT NATURE DH2987101 ORIGINAL",
      price: 759000,
      image: "/image/nike2.png",
      description:
      "NIKE Sepatu Sneakers Pria COURT VISION LOW NEXT NATURE DH2987101 ORIGINAL adalah sepatu sneakers yang menggabungkan gaya klasik dengan teknologi ramah lingkungan. Dengan desain yang terinspirasi dari sepatu tenis vintage, sepatu ini menawarkan tampilan yang stylish dan fungsional. Terbuat dari bahan daur ulang, sepatu ini tidak hanya nyaman dipakai tetapi juga mendukung upaya pelestarian lingkungan."
    },
    {
      id: 11,
      name: "NIKE Sepatu Tenis W ZOOM GP CHALLENGE PRO HC IB6560109 ORIGINAL",
      price: 1729000,
      image: "/image/nike3.png",
      description:
      "NIKE Sepatu Tenis W ZOOM GP CHALLENGE PRO HC IB6560109 ORIGINAL adalah sepatu tenis premium yang dirancang khusus untuk wanita yang mengutamakan performa di lapangan. Dengan teknologi Zoom Air yang inovatif, sepatu ini memberikan responsivitas dan kenyamanan luar biasa saat bermain. Desainnya yang stylish juga membuatnya cocok untuk digunakan di luar lapangan."
    },
    {
      id: 12,
      name: "NIKE Sepatu Sneakers Pria AIR MAX TORCH 4 343846002 ORIGINAL",
      price: 1299000,
      image: "/image/nike4.png",
      description:
      "NIKE Sepatu Sneakers Pria AIR MAX TORCH 4 343846002 ORIGINAL adalah sepatu sneakers yang menggabungkan gaya sporty dengan kenyamanan maksimal. Dengan teknologi Air Max yang terkenal, sepatu ini menawarkan bantalan yang responsif dan dukungan optimal untuk aktivitas sehari-hari. Desainnya yang modern dan dinamis membuatnya cocok untuk berbagai kesempatan, memberikan tampilan yang trendi dan fungsional."
    }, 
  ];

  return { products };
}

export default useProducts;
