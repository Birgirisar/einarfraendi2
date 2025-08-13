"use client";
import React, { useEffect, useRef } from "react";
import NavBar from "./components/NavBar";

// Extend the Window type so TypeScript knows about ShopifyBuy
declare global {
  interface Window {
    ShopifyBuy?: {
      buildClient: (config: { domain: string; storefrontAccessToken: string }) => unknown;
      UI: {
        onReady: (client: unknown) => Promise<ShopifyUI>;
      };
    };
  }
}

// Minimal Shopify UI interface so we can type createComponent
interface ShopifyUI {
  createComponent: (
    type: string,
    options: {
      id: string;
      node: HTMLElement | null;
      moneyFormat?: string;
      options?: Record<string, unknown>;
    }
  ) => void;
}

const products = [
  { id: "9987625287973", divId: "product-component-1755090022844" },
  { id: "9987600679205", divId: "product-component-1755089485940" },
  { id: "9987638067493", divId: "product-component-1755090350159" },
  { id: "9987636134181", divId: "product-component-1755092474587" },
];

export default function Home() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return; // already initialized once
    initialized.current = true;

    if (!window.ShopifyBuy) {
      const script = document.createElement("script");
      script.src =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
      script.async = true;
      script.onload = initShopifyBuyButtons;
      document.body.appendChild(script);
    } else {
      initShopifyBuyButtons();
    }

    function initShopifyBuyButtons() {
      if (!window.ShopifyBuy?.UI) return;

      const client = window.ShopifyBuy.buildClient({
        domain: "rrrkcv-qw.myshopify.com",
        storefrontAccessToken: "d77f2db354e1b9f37cbf963f5c528065",
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        products.forEach((product) => {
          const node = document.getElementById(product.divId);
          if (node) node.innerHTML = ""; // clear old content
          ui.createComponent("product", {
            id: product.id,
            node,
            moneyFormat: "%7B%7Bamount_no_decimals%7D%7D%20kr",
            options: {
              product: {
                styles: {
                  product: {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(25% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px",
                    },
                  },
                  button: {
                    ":hover": { "background-color": "#068dd0" },
                    "background-color": "#079de7",
                    ":focus": { "background-color": "#068dd0" },
                    "border-radius": "20px",
                    "padding-left": "38px",
                    "padding-right": "38px",
                  },
                },
                text: { button: "Add to cart" },
              },
              modalProduct: {
                contents: {
                  img: false,
                  imgWithCarousel: true,
                  button: false,
                  buttonWithQuantity: true,
                },
                styles: {
                  product: {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0px",
                      "margin-bottom": "0px",
                    },
                  },
                  button: {
                    ":hover": { "background-color": "#068dd0" },
                    "background-color": "#079de7",
                    ":focus": { "background-color": "#068dd0" },
                    "border-radius": "20px",
                    "padding-left": "38px",
                    "padding-right": "38px",
                  },
                },
                text: { button: "Add to cart" },
              },
              cart: {
                styles: {
                  button: {
                    ":hover": { "background-color": "#068dd0" },
                    "background-color": "#079de7",
                    ":focus": { "background-color": "#068dd0" },
                    "border-radius": "20px",
                  },
                },
                text: { total: "Subtotal", button: "Checkout" },
              },
              toggle: {
                styles: {
                  toggle: {
                    "background-color": "#079de7",
                    ":hover": { "background-color": "#068dd0" },
                    ":focus": { "background-color": "#068dd0" },
                  },
                },
              },
            },
          });
        });
      });
    }
  }, []);

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-base-200 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div key={product.divId} id={product.divId}></div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
