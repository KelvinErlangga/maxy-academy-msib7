import React, { useRef } from "react";
import { Page, Navbar, Block, Button, Card, CardContent, f7 } from "framework7-react";

// Daftar produk
const products = [
  { id: 1, title: "Product 1", price: "$20", image: "../images/image1.jpg" },
  { id: 2, title: "Product 2", price: "$100", image: "../images/image2.jpg" },
  { id: 3, title: "Product 3", price: "$80", image: "../images/image3.jpg" },
  { id: 4, title: "Product 4", price: "$25", image: "../images/image4.jpg" },
  { id: 5, title: "Product 5", price: "$120", image: "../images/image5.jpg" },
  { id: 6, title: "Product 6", price: "$60", image: "../images/image6.jpg" },
];

const NotifPage = () => {
  const notificationRefs = useRef({});

  // Membuat atau membuka notifikasi
  const createNotification = (options) => {
    const { key, ...rest } = options;
    if (!notificationRefs.current[key]) {
      // Jika notifikasi belum dibuat, buat baru
      notificationRefs.current[key] = f7.notification.create(rest);
    }
    notificationRefs.current[key].open(); // Buka notifikasi
  };

  // Menampilkan notifikasi saat produk ditambahkan ke keranjang
  const showAddToCartNotification = (product) => {
    createNotification({
      key: `addToCart-${product.id}`,
      icon: '<i class="icon icon-f7"></i>',
      title: "Added to Cart",
      subtitle: product.title,
      text: "Item added to cart.",
      closeTimeout: 3000,
      closeButton: true,
      bgColor: "green",
    });
  };

  // Fungsi untuk menangani aksi "Add to Cart"
  const handleAddToCart = (product) => {
    showAddToCartNotification(product);
  };

  return (
    <Page className="minimalist-page">
      <Navbar title="Products" className="minimalist-navbar" />
      <Block strongIos outlineIos className="minimalist-block">
        <p>Pilih produk untuk menambah ke keranjang:</p>
        <div className="product-grid">
          {/* Mapping produk ke dalam card */}
          {products.map((product) => (
            <Card key={product.id} className="minimalist-card">
              <img src={product.image} alt={product.title} />
              <CardContent>
                <h4>{product.title}</h4>
                <p>{product.price}</p>
                <Button fill onClick={() => handleAddToCart(product)} className="minimalist-button">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Block>

      <style jsx>{`
        .product-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px; /* Jarak antar card */
        }
        .minimalist-card {
          flex: 1 1 calc(25% - 16px); /* 4 kolom */
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Bayangan */
        }
        img {
          width: 100%; /* Gambar memenuhi card */
          height: auto;
        }
      `}</style>
    </Page>
  );
};

export default NotifPage;
