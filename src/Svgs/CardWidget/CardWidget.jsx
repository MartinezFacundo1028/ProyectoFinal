import { useCart } from "../../Hooks/UseCart";



const CardWidget = () => {
  
  const {totalQuantity} = useCart()

  return (
        <div>
          <li className="nav-item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm0 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10-3c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm0 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM6.16 13.75L4.21 4H1V2h3.59l1.46 7.8L8.11 13h9.88l1.17-5.9H6.54L5.25 4h13.1c.53 0 .99.38 1.09.9L21.64 13c.14.73-.38 1.47-1.14 1.47H6.16zM8.8 15.75c-.56 0-1.02-.42-1.11-.97L6.54 10h13.28l-1.07 5.15c-.1.5-.56.85-1.07.85H8.8z"/>
              </svg>
              <span className="badge badge-pill badge-primary ml-1 text-black" style={{ fontSize: '16px' }}>
                {totalQuantity}
              </span>
          </li>
        </div>
      )
}

export default CardWidget;
