import type { ProductsList } from "../types/Produtcs";

interface ListProductsProps {
  products: ProductsList | null;
}

const ListProductsHome = ({ products }: ListProductsProps) => {
  return (
    <div className="overflow-x-hidden p-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
      {products?.products?.map((product) => (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-xl hover:scale-105 transition duration-300 ease-in-out">
          <div className="h-56 w-full">
            <a href="#">
              <img className="mx-auto h-full" src={product?.image} alt="" />
            </a>
          </div>

          <div className="pt-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                {" "}
                Up to 15% off{" "}
              </span>

              <div className="flex items-center justify-end gap-1">
                <button
                  type="button"
                  data-tooltip-target="tooltip-quick-look-2"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black"
                >
                  <span className="sr-only"> Quick look </span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="2"
                      d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-width="2"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></path>
                  </svg>
                </button>
                <div
                  id="tooltip-quick-look-2"
                  role="tooltip"
                  className="tooltip absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-black shadow-sm transition-opacity duration-300 dark:bg-gray-700 opacity-0 invisible"
                  style={{
                    position: "absolute",
                    inset: "auto auto 0px 0px",
                    margin: "0px",
                    transform: "translate(520px, -893px)",
                  }}
                  data-popper-placement="top"
                >
                  Quick look
                  <div
                    className="tooltip-arrow"
                    data-popper-arrow=""
                    style={{
                      position: "absolute",
                      left: "0px",
                      transform: "translate(44px, 0px)",
                    }}
                  ></div>
                </div>

                <button
                  type="button"
                  data-tooltip-target="tooltip-add-to-favorites-2"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black"
                >
                  <span className="sr-only"> Add to Favorites </span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                    ></path>
                  </svg>
                </button>
                <div
                  id="tooltip-add-to-favorites-2"
                  role="tooltip"
                  className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-black opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                  data-popper-placement="top"
                  style={{
                    position: "absolute",
                    inset: "auto auto 0px 0px",
                    margin: "0px",
                    transform: "translate(535px, -893px)",
                  }}
                >
                  Add to favorites
                  <div
                    className="tooltip-arrow"
                    data-popper-arrow=""
                    style={{
                      position: "absolute",
                      left: "0px",
                      transform: "translate(61px, 0px)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-black"
            >
              {product?.name}
            </a>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>
              </div>

              <p className="text-sm font-medium text-gray-900 dark:text-black">
                4.9
              </p>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                (1,233)
              </p>
            </div>

            <ul className="mt-2 flex items-center gap-4">
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  ></path>
                </svg>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Best Seller
                </p>
              </li>

              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  ></path>
                </svg>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Best Price
                </p>
              </li>
            </ul>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-black">
                $1,199
              </p>

              <button
                type="button"
                className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  className="-ms-2 me-2 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  ></path>
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProductsHome;
