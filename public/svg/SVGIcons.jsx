export const Ring = ({sectorPercent, value = "50%", text = value}) => {
    return (
        <div className = "po-rel d-inline-block" style = {{
            width: "60px",
            height: "60px"
        }}>
            <svg style = {{
                width: "60px",
                height: "60px"
            }}>
                <circle cx = "30" cy = "30" stroke = "#ffffff" strokeWidth = "4" fill = "none" r = "27" />
            </svg>
            <span className = "text-primary half-bold po-abs" style = {{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>{text}</span>
        </div>
    )
}

export const Logo = () => {
  return (
    <svg width="116" height="40" viewBox="0 0 116 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#03B575" />
      <path
        d="M25.8 13.54V28H23.1V21.68H16.31V28H13.61V13.54H16.31V19.76H23.1V13.54H25.8Z"
        fill="white"
      />
      <path
        d="M69.8 13.54V28H67.1V21.68H60.31V28H57.61V13.54H60.31V19.76H67.1V13.54H69.8ZM77.0577 17.58C77.8177 17.58 78.5077 17.7033 79.1277 17.95C79.7543 18.1967 80.2877 18.5467 80.7277 19C81.1743 19.4533 81.5177 20.0067 81.7577 20.66C81.9977 21.3133 82.1177 22.0433 82.1177 22.85C82.1177 23.6633 81.9977 24.3967 81.7577 25.05C81.5177 25.7033 81.1743 26.26 80.7277 26.72C80.2877 27.18 79.7543 27.5333 79.1277 27.78C78.5077 28.0267 77.8177 28.15 77.0577 28.15C76.291 28.15 75.5943 28.0267 74.9677 27.78C74.341 27.5333 73.8043 27.18 73.3577 26.72C72.9177 26.26 72.5743 25.7033 72.3277 25.05C72.0877 24.3967 71.9677 23.6633 71.9677 22.85C71.9677 22.0433 72.0877 21.3133 72.3277 20.66C72.5743 20.0067 72.9177 19.4533 73.3577 19C73.8043 18.5467 74.341 18.1967 74.9677 17.95C75.5943 17.7033 76.291 17.58 77.0577 17.58ZM77.0577 26.25C77.911 26.25 78.541 25.9633 78.9477 25.39C79.361 24.8167 79.5677 23.9767 79.5677 22.87C79.5677 21.7633 79.361 20.92 78.9477 20.34C78.541 19.76 77.911 19.47 77.0577 19.47C76.191 19.47 75.5477 19.7633 75.1277 20.35C74.7143 20.93 74.5077 21.77 74.5077 22.87C74.5077 23.97 74.7143 24.81 75.1277 25.39C75.5477 25.9633 76.191 26.25 77.0577 26.25ZM90.462 19.74C90.3954 19.8467 90.3254 19.9233 90.252 19.97C90.1787 20.01 90.0854 20.03 89.972 20.03C89.852 20.03 89.722 19.9967 89.582 19.93C89.4487 19.8633 89.292 19.79 89.112 19.71C88.932 19.6233 88.7254 19.5467 88.492 19.48C88.2654 19.4133 87.9954 19.38 87.682 19.38C87.1954 19.38 86.812 19.4833 86.532 19.69C86.2587 19.8967 86.122 20.1667 86.122 20.5C86.122 20.72 86.192 20.9067 86.332 21.06C86.4787 21.2067 86.6687 21.3367 86.902 21.45C87.142 21.5633 87.412 21.6667 87.712 21.76C88.012 21.8467 88.3154 21.9433 88.622 22.05C88.9354 22.1567 89.242 22.28 89.542 22.42C89.842 22.5533 90.1087 22.7267 90.342 22.94C90.582 23.1467 90.772 23.3967 90.912 23.69C91.0587 23.9833 91.132 24.3367 91.132 24.75C91.132 25.2433 91.042 25.7 90.862 26.12C90.6887 26.5333 90.4287 26.8933 90.082 27.2C89.7354 27.5 89.3054 27.7367 88.792 27.91C88.2854 28.0767 87.6987 28.16 87.032 28.16C86.6787 28.16 86.332 28.1267 85.992 28.06C85.6587 28 85.3354 27.9133 85.022 27.8C84.7154 27.6867 84.4287 27.5533 84.162 27.4C83.902 27.2467 83.672 27.08 83.472 26.9L84.042 25.96C84.1154 25.8467 84.202 25.76 84.302 25.7C84.402 25.64 84.5287 25.61 84.682 25.61C84.8354 25.61 84.9787 25.6533 85.112 25.74C85.252 25.8267 85.412 25.92 85.592 26.02C85.772 26.12 85.982 26.2133 86.222 26.3C86.4687 26.3867 86.7787 26.43 87.152 26.43C87.4454 26.43 87.6954 26.3967 87.902 26.33C88.1154 26.2567 88.2887 26.1633 88.422 26.05C88.562 25.9367 88.662 25.8067 88.722 25.66C88.7887 25.5067 88.822 25.35 88.822 25.19C88.822 24.95 88.7487 24.7533 88.602 24.6C88.462 24.4467 88.272 24.3133 88.032 24.2C87.7987 24.0867 87.5287 23.9867 87.222 23.9C86.922 23.8067 86.612 23.7067 86.292 23.6C85.9787 23.4933 85.6687 23.37 85.362 23.23C85.062 23.0833 84.792 22.9 84.552 22.68C84.3187 22.46 84.1287 22.19 83.982 21.87C83.842 21.55 83.772 21.1633 83.772 20.71C83.772 20.29 83.8554 19.89 84.022 19.51C84.1887 19.13 84.432 18.8 84.752 18.52C85.0787 18.2333 85.482 18.0067 85.962 17.84C86.4487 17.6667 87.0087 17.58 87.642 17.58C88.3487 17.58 88.992 17.6967 89.572 17.93C90.152 18.1633 90.6354 18.47 91.022 18.85L90.462 19.74ZM96.6111 28.16C95.7178 28.16 95.0311 27.91 94.5511 27.41C94.0778 26.9033 93.8411 26.2067 93.8411 25.32V19.59H92.7911C92.6578 19.59 92.5444 19.5467 92.4511 19.46C92.3578 19.3733 92.3111 19.2433 92.3111 19.07V18.09L93.9611 17.82L94.4811 15.02C94.5144 14.8867 94.5778 14.7833 94.6711 14.71C94.7644 14.6367 94.8844 14.6 95.0311 14.6H96.3111V17.83H99.0511V19.59H96.3111V25.15C96.3111 25.47 96.3878 25.72 96.5411 25.9C96.7011 26.08 96.9178 26.17 97.1911 26.17C97.3444 26.17 97.4711 26.1533 97.5711 26.12C97.6778 26.08 97.7678 26.04 97.8411 26C97.9211 25.96 97.9911 25.9233 98.0511 25.89C98.1111 25.85 98.1711 25.83 98.2311 25.83C98.3044 25.83 98.3644 25.85 98.4111 25.89C98.4578 25.9233 98.5078 25.9767 98.5611 26.05L99.3011 27.25C98.9411 27.55 98.5278 27.7767 98.0611 27.93C97.5944 28.0833 97.1111 28.16 96.6111 28.16ZM107.364 21.69C107.364 21.37 107.318 21.07 107.224 20.79C107.138 20.5033 107.004 20.2533 106.824 20.04C106.644 19.8267 106.414 19.66 106.134 19.54C105.861 19.4133 105.541 19.35 105.174 19.35C104.461 19.35 103.898 19.5533 103.484 19.96C103.078 20.3667 102.818 20.9433 102.704 21.69H107.364ZM102.654 23.18C102.694 23.7067 102.788 24.1633 102.934 24.55C103.081 24.93 103.274 25.2467 103.514 25.5C103.754 25.7467 104.038 25.9333 104.364 26.06C104.698 26.18 105.064 26.24 105.464 26.24C105.864 26.24 106.208 26.1933 106.494 26.1C106.788 26.0067 107.041 25.9033 107.254 25.79C107.474 25.6767 107.664 25.5733 107.824 25.48C107.991 25.3867 108.151 25.34 108.304 25.34C108.511 25.34 108.664 25.4167 108.764 25.57L109.474 26.47C109.201 26.79 108.894 27.06 108.554 27.28C108.214 27.4933 107.858 27.6667 107.484 27.8C107.118 27.9267 106.741 28.0167 106.354 28.07C105.974 28.1233 105.604 28.15 105.244 28.15C104.531 28.15 103.868 28.0333 103.254 27.8C102.641 27.56 102.108 27.21 101.654 26.75C101.201 26.2833 100.844 25.71 100.584 25.03C100.324 24.3433 100.194 23.55 100.194 22.65C100.194 21.95 100.308 21.2933 100.534 20.68C100.761 20.06 101.084 19.5233 101.504 19.07C101.931 18.61 102.448 18.2467 103.054 17.98C103.668 17.7133 104.358 17.58 105.124 17.58C105.771 17.58 106.368 17.6833 106.914 17.89C107.461 18.0967 107.931 18.4 108.324 18.8C108.718 19.1933 109.024 19.68 109.244 20.26C109.471 20.8333 109.584 21.49 109.584 22.23C109.584 22.6033 109.544 22.8567 109.464 22.99C109.384 23.1167 109.231 23.18 109.004 23.18H102.654ZM114.138 13.14V28H111.668V13.14H114.138Z"
        fill="#03B575"
      />
    </svg>
  )
}

export const Settings = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill = {props.fill} style = {props.style} className = {props.className} d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.653V16.347L12 20.689L19.5 16.347V7.653L12 3.311ZM12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16ZM12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z" />
    </svg>
  )
}

export const Read = () => {
  return (
    <svg
      width="22"
      height="13"
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.602 8.76L12.014 10.172L20.48 1.706L21.894 3.12L12.014 13L5.65 6.636L7.064 5.222L9.189 7.347L10.602 8.759V8.76ZM10.604 5.932L15.556 0.979004L16.966 2.389L12.014 7.342L10.604 5.932ZM7.777 11.587L6.364 13L0 6.636L1.414 5.222L2.827 6.635L2.826 6.636L7.777 11.587Z"
        fill="white"
      />
    </svg>
  )
}

export const Notification = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill = {"#000000"} d="M20 17H22V19H2V17H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V17ZM18 17V10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V17H18ZM9 21H15V23H9V21Z" />
    </svg>
  )
}

export const Favorites = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      e
      <path fill = {props.fill} d="M16.5 3C19.538 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.36 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.934 18.604C13.815 18.048 14.61 17.495 15.354 16.903C18.335 14.533 20 11.943 20 9C20 6.64 18.463 5 16.5 5C15.424 5 14.26 5.57 13.414 6.414L12 7.828L10.586 6.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.656 4 9C4 11.944 5.666 14.533 8.645 16.903C9.39 17.495 10.185 18.048 11.066 18.603C11.365 18.792 11.661 18.973 12 19.175C12.339 18.973 12.635 18.792 12.934 18.604Z" />
    </svg>
  )
}

export const Home = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill = {props.fill} d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C19.0609 7 20.0783 7.42143 20.8284 8.17157C21.5786 8.92172 22 9.93913 22 11ZM8 13C7.20435 13 6.44129 12.6839 5.87868 12.1213C5.31607 11.5587 5 10.7956 5 10C5 9.20435 5.31607 8.44129 5.87868 7.87868C6.44129 7.31607 7.20435 7 8 7C8.79565 7 9.55871 7.31607 10.1213 7.87868C10.6839 8.44129 11 9.20435 11 10C11 10.7956 10.6839 11.5587 10.1213 12.1213C9.55871 12.6839 8.79565 13 8 13Z" />
    </svg>
  )
}

export const Help = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill = {props.fill} d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" />
    </svg>
  )
}

export const Logout = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C13.5527 1.99884 15.0842 2.35978 16.4729 3.05414C17.8617 3.74851 19.0693 4.75718 20 6H17.29C16.1352 4.98176 14.7112 4.31836 13.1887 4.0894C11.6663 3.86044 10.1101 4.07566 8.70689 4.70922C7.30371 5.34277 6.11315 6.36776 5.27807 7.66119C4.44299 8.95462 3.99887 10.4615 3.999 12.0011C3.99913 13.5407 4.4435 15.0475 5.27879 16.3408C6.11409 17.6341 7.30482 18.6589 8.7081 19.2922C10.1114 19.9255 11.6676 20.1405 13.19 19.9113C14.7125 19.6821 16.1364 19.0184 17.291 18H20.001C19.0702 19.243 17.8624 20.2517 16.4735 20.9461C15.0846 21.6405 13.5528 22.0013 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"
        fill="#FF6760"
      />
    </svg>
  )
}

export const Payment = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill = {props.fill} d="M18 7H21C21.2652 7 21.5196 7.10536 21.7071 7.29289C21.8946 7.48043 22 7.73478 22 8V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H18V7ZM4 9V19H20V9H4ZM4 5V7H16V5H4ZM15 13H18V15H15V13Z" />
    </svg>
  )
}

export const Heart = (props) => {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19">
      <path fill = {props.fill} fav = {props.fav} hostelid = {props.hostelId} d="M14.5 0C17.538 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.36 0 9 1 10 2C11 1 12.64 0 14.5 0Z" />
    </svg>
  )
}

export const Map = () => {
  return (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
      <path
        d="M15.364 15.364L9 21.728L2.636 15.364C1.37734 14.1053 0.520187 12.5017 0.172928 10.7558C-0.17433 9.01001 0.00390685 7.20041 0.685099 5.55588C1.36629 3.91136 2.51984 2.50575 3.99988 1.51683C5.47992 0.527899 7.21998 6.10352e-05 9 6.10352e-05C10.78 6.10352e-05 12.5201 0.527899 14.0001 1.51683C15.4802 2.50575 16.6337 3.91136 17.3149 5.55588C17.9961 7.20041 18.1743 9.01001 17.8271 10.7558C17.4798 12.5017 16.6227 14.1053 15.364 15.364ZM9 11C9.53044 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53042 11 8.99998C11 8.46955 10.7893 7.96084 10.4142 7.58577C10.0391 7.2107 9.53044 6.99998 9 6.99998C8.46957 6.99998 7.96086 7.2107 7.58579 7.58577C7.21072 7.96084 7 8.46955 7 8.99998C7 9.53042 7.21072 10.0391 7.58579 10.4142C7.96086 10.7893 8.46957 11 9 11Z"
        fill="#A0A4A8"
      />
    </svg>
  )
}

export const Archive = ({fill = "#000000"}) => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7H0V1.003C0 0.449002 0.455 2.19659e-06 0.992 2.19659e-06H19.008C19.1393 -0.000274335 19.2693 0.0255614 19.3905 0.076006C19.5117 0.126451 19.6217 0.200497 19.714 0.293835C19.8063 0.387173 19.8791 0.497939 19.9282 0.619688C19.9773 0.741436 20.0017 0.871735 20 1.003V7H19V17.001C19.0004 17.1318 18.975 17.2614 18.9253 17.3824C18.8756 17.5034 18.8026 17.6134 18.7104 17.7062C18.6182 17.7989 18.5086 17.8726 18.3879 17.923C18.2672 17.9735 18.1378 17.9996 18.007 18H1.993C1.8622 17.9996 1.73276 17.9735 1.61207 17.923C1.49139 17.8726 1.38181 17.7989 1.2896 17.7062C1.19739 17.6134 1.12436 17.5034 1.07467 17.3824C1.02498 17.2614 0.999605 17.1318 1 17.001V7ZM17 7H3V16H17V7ZM2 2V5H18V2H2ZM7 9H13V11H7V9Z"
        fill = {fill}
      />
    </svg>
  )
}

export const MapOutline = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20.9L16.95 15.95C17.9289 14.971 18.5955 13.7237 18.8656 12.3659C19.1356 11.008 18.9969 9.6006 18.4671 8.32155C17.9373 7.04251 17.04 5.9493 15.8889 5.18017C14.7378 4.41103 13.3844 4.0005 12 4.0005C10.6156 4.0005 9.26222 4.41103 8.11109 5.18017C6.95996 5.9493 6.06275 7.04251 5.53292 8.32155C5.00308 9.6006 4.86442 11.008 5.13445 12.3659C5.40449 13.7237 6.07111 14.971 7.05 15.95L12 20.9ZM12 23.728L5.636 17.364C4.37734 16.1053 3.52019 14.5017 3.17293 12.7558C2.82567 11.01 3.00391 9.20043 3.6851 7.5559C4.36629 5.91137 5.51984 4.50577 6.99988 3.51684C8.47992 2.52791 10.22 2.00008 12 2.00008C13.78 2.00008 15.5201 2.52791 17.0001 3.51684C18.4802 4.50577 19.6337 5.91137 20.3149 7.5559C20.9961 9.20043 21.1743 11.01 20.8271 12.7558C20.4798 14.5017 19.6227 16.1053 18.364 17.364L12 23.728ZM12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58578C13.0391 9.21071 12.5304 9 12 9C11.4696 9 10.9609 9.21071 10.5858 9.58578C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13ZM12 15C10.9391 15 9.92172 14.5786 9.17158 13.8284C8.42143 13.0783 8 12.0609 8 11C8 9.93913 8.42143 8.92172 9.17158 8.17157C9.92172 7.42143 10.9391 7 12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11C16 12.0609 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15Z"
        fill="#03B575"
      />
    </svg>
  )
}

export const Search = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z"
        fill="#03B575"
      />
    </svg>
  )
}

export const Cancel = (props) => {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14">
      <path fill = {props.fill} d="M7.00023 5.58623L11.9502 0.63623L13.3642 2.05023L8.41423 7.00023L13.3642 11.9502L11.9502 13.3642L7.00023 8.41423L2.05023 13.3642L0.63623 11.9502L5.58623 7.00023L0.63623 2.05023L2.05023 0.63623L7.00023 5.58623Z" />
    </svg>
  )
}

export const ArrowDown = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 13.172L16.95 8.222L18.364 9.636L12 16L5.63599 9.636L7.04999 8.222L12 13.172Z"
        fill={props.fill || "#A0A4A8"}
      />
    </svg>
  )
}

export const CircleIntersect = () => {
  return (
    <svg
      width="50"
      height="33"
      viewBox="0 0 50 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.4"
        cx="16.9047"
        cy="16.4052"
        r="16.4047"
        fill="white"
      />
      <circle
        opacity="0.4"
        cx="33.3109"
        cy="16.4047"
        r="16.4047"
        fill="white"
      />
    </svg>
  )
}

export const EditInput = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M1.5 8.73V10.25C1.5 10.39 1.61 10.5 1.75 10.5H3.27C3.335 10.5 3.4 10.475 3.445 10.425L8.905 4.97L7.03 3.095L1.575 8.55C1.525 8.6 1.5 8.66 1.5 8.73ZM10.355 3.52C10.55 3.325 10.55 3.01 10.355 2.815L9.185 1.645C8.99 1.45 8.675 1.45 8.48 1.645L7.565 2.56L9.44 4.435L10.355 3.52Z"
        fill="#2D3748"
      />
    </svg>
  )
}

export const Edit = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 8.22997V9.74997C0.5 9.88997 0.61 9.99997 0.75 9.99997H2.27C2.335 9.99997 2.4 9.97497 2.445 9.92497L7.905 4.46997L6.03 2.59497L0.575 8.04997C0.525 8.09997 0.5 8.15997 0.5 8.22997ZM9.355 3.01997C9.55 2.82497 9.55 2.50997 9.355 2.31497L8.185 1.14497C7.99 0.949968 7.675 0.949968 7.48 1.14497L6.565 2.05997L8.44 3.93497L9.355 3.01997Z"
        fill="#2D3748"
      />
    </svg>
  )
}

export const Star = ({fill}) => {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19">
      <path fill = {fill} d="M9.99999 15L4.12199 18.59L5.71999 11.89L0.48999 7.41L7.35499 6.86L9.99999 0.5L12.645 6.86L19.511 7.41L14.28 11.89L15.878 18.59L9.99999 15Z" />
    </svg>
  )
}

export const MasterCardCircle = () => {
  return (
    <svg
      width="21"
      height="15"
      viewBox="0 0 21 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6.63158" cy="7.49999" r="6.63158" fill="#EB001B" />
      <circle cx="14.3689" cy="7.49999" r="6.63158" fill="#F79E1B" />
    </svg>
  )
}

export const ArrowLeft = (props) => {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <path
        d="M2.828 7L7.778 11.95L6.364 13.364L0 7L6.364 0.636002L7.778 2.05L2.828 7Z"
        fill={props.fill || "white"}
      />
    </svg>
  )
}

export const RecentCircle = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill="#E8FFF6" />
    </svg>
  )
}

export const Calender = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H5V0H7V2H13V0H15V2ZM2 8V18H18V8H2ZM4 10H6V12H4V10ZM9 10H11V12H9V10ZM14 10H16V12H14V10Z"
        fill="#25282B"
      />
    </svg>
  )
}

export const Hamburger = () => {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
      <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="#09121F" />
    </svg>
  )
}

export const Receipts = ({fill}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill = {fill} d="M3 6.99981L11.445 1.36981C11.6093 1.26017 11.8025 1.20166 12 1.20166C12.1975 1.20166 12.3907 1.26017 12.555 1.36981L21 6.99981V20.9998C21 21.265 20.8946 21.5194 20.7071 21.7069C20.5196 21.8945 20.2652 21.9998 20 21.9998H4C3.73478 21.9998 3.48043 21.8945 3.29289 21.7069C3.10536 21.5194 3 21.265 3 20.9998V6.99981ZM5 8.06981V19.9998H19V8.06981L12 3.40381L5 8.06981ZM8 15.9998H16V17.9998H8V15.9998ZM8 12.9998H16V14.9998H8V12.9998ZM12 10.9998C11.4696 10.9998 10.9609 10.7891 10.5858 10.414C10.2107 10.039 10 9.53024 10 8.99981C10 8.46938 10.2107 7.96067 10.5858 7.5856C10.9609 7.21052 11.4696 6.99981 12 6.99981C12.5304 6.99981 13.0391 7.21052 13.4142 7.5856C13.7893 7.96067 14 8.46938 14 8.99981C14 9.53024 13.7893 10.039 13.4142 10.414C13.0391 10.7891 12.5304 10.9998 12 10.9998Z" />
    </svg>
  )
}

export const Overview = ({fill}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill = {fill} d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" />
    </svg>
  )
}

export const Apple = () => {
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
      <path
        d="M21.1384 8.28467C18.6972 8.28467 17.6654 9.44959 15.9653 9.44959C14.2221 9.44959 12.8925 8.29314 10.777 8.29314C8.70632 8.29314 6.49818 9.55736 5.09591 11.711C3.12693 14.748 3.46114 20.4679 6.65015 25.3407C7.79085 27.0851 9.31421 29.0413 11.3123 29.0625H11.3486C13.0851 29.0625 13.6009 27.9255 15.9907 27.9121H16.027C18.3811 27.9121 18.8534 29.0559 20.5826 29.0559H20.6189C22.617 29.0347 24.2221 26.8671 25.3628 25.1294C26.1838 23.8797 26.4889 23.2525 27.1186 21.8387C22.5056 20.0877 21.7645 13.548 26.3267 11.0408C24.9341 9.29701 22.9772 8.28709 21.1324 8.28709L21.1384 8.28467Z"
        fill="#2D3748"
      />
      <path
        d="M20.6008 1.93896C19.1477 2.03766 17.4524 2.96281 16.4594 4.17072C15.5585 5.26541 14.8174 6.88928 15.108 8.4641H15.2243C16.7719 8.4641 18.3558 7.53228 19.2809 6.3383C20.1722 5.20184 20.8479 3.59129 20.6008 1.93896Z"
        fill="#2D3748"
      />
    </svg>
  )
}

export const Arrow = () => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.17168 6.99999L0.22168 2.04999L1.63568 0.635986L7.99968 6.99999L1.63568 13.364L0.22168 11.95L5.17168 6.99999Z"
        fill="#09121F"
      />
    </svg>
  )
}

export const Check = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM9.003 14L16.073 6.929L14.659 5.515L9.003 11.172L6.174 8.343L4.76 9.757L9.003 14Z"
        fill="#03B575"
      />
    </svg>
  )
}

export const Facebook = () => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.4163 13.4999C26.4163 6.36992 20.6297 0.583252 13.4997 0.583252C6.36967 0.583252 0.583008 6.36992 0.583008 13.4999C0.583008 19.7516 5.02634 24.957 10.9163 26.1583V17.3749H8.33301V13.4999H10.9163V10.2708C10.9163 7.77784 12.9443 5.74992 15.4372 5.74992H18.6663V9.62492H16.083C15.3726 9.62492 14.7913 10.2062 14.7913 10.9166V13.4999H18.6663V17.3749H14.7913V26.352C21.3143 25.7062 26.4163 20.2037 26.4163 13.4999Z"
        fill="#2D3748"
      />
    </svg>
  )
}

export const Google = () => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6796 8.88175L20.5737 8.43222H10.8031V12.5675H16.6409C16.0348 15.4457 13.2223 16.9607 10.9249 16.9607C9.25337 16.9607 7.49133 16.2575 6.32509 15.1274C5.70977 14.5216 5.21999 13.8004 4.88377 13.005C4.54755 12.2097 4.37151 11.3558 4.36571 10.4924C4.36571 8.7505 5.14852 7.00816 6.28759 5.86206C7.42665 4.71597 9.14696 4.07472 10.8574 4.07472C12.8163 4.07472 14.2202 5.11488 14.7452 5.58925L17.6838 2.66613C16.8218 1.90863 14.4537 -0.00012207 10.7627 -0.00012207C7.91509 -0.00012207 5.18462 1.09066 3.18868 3.08003C1.21899 5.03894 0.199463 7.87159 0.199463 10.4999C0.199463 13.1282 1.16415 15.8192 3.0729 17.7936C5.11243 19.8992 8.00087 20.9999 10.9751 20.9999C13.6812 20.9999 16.2462 19.9396 18.0743 18.0158C19.8715 16.1221 20.801 13.5017 20.801 10.7549C20.801 9.59847 20.6848 8.91175 20.6796 8.88175Z"
        fill="#2D3748"
      />
    </svg>
  )
}

export const Naira = () => {
  return (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.66 4.878V15H9.694C9.54467 15 9.41867 14.9767 9.316 14.93C9.218 14.8787 9.12233 14.7947 9.029 14.678L3.744 7.93C3.772 8.238 3.786 8.52267 3.786 8.784V15H2.127V4.878H3.114C3.19333 4.878 3.261 4.88267 3.317 4.892C3.37767 4.89667 3.429 4.91067 3.471 4.934C3.51767 4.95267 3.562 4.983 3.604 5.025C3.646 5.06233 3.69267 5.11367 3.744 5.179L9.05 11.955C9.036 11.7917 9.02433 11.6307 9.015 11.472C9.00567 11.3133 9.001 11.1663 9.001 11.031V4.878H10.66Z"
        fill="#25282B"
      />
      <line y1="7.5" x2="12" y2="7.5" stroke="#25282B" />
      <line y1="11.5" x2="12" y2="11.5" stroke="#25282B" />
    </svg>
  )
}

export const Pen = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 7.73003V9.25003C0.5 9.39003 0.61 9.50003 0.75 9.50003H2.27C2.335 9.50003 2.4 9.47503 2.445 9.42503L7.905 3.97003L6.03 2.09503L0.575 7.55003C0.525 7.60003 0.5 7.66003 0.5 7.73003ZM9.355 2.52003C9.55 2.32503 9.55 2.01003 9.355 1.81503L8.185 0.645029C7.99 0.450029 7.675 0.450029 7.48 0.645029L6.565 1.56003L8.44 3.43503L9.355 2.52003Z"
        fill="#2D3748"
      />
    </svg>
  )
}

export const LogoWhite = () => {
  return (
    <svg
      width="181"
      height="239"
      viewBox="0 0 181 239"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="90.5" cy="75" r="75" fill="#03A86B" />
      <path
        d="M107.14 56.512V97H99.58V79.304H80.568V97H73.008V56.512H80.568V73.928H99.58V56.512H107.14Z"
        fill="white"
      />
      <path
        d="M18.256 200.648C22.2133 200.648 25.872 200.685 29.232 200.76C30.9867 193.667 32.704 188.739 34.384 185.976C35.504 184.371 36.624 183.213 37.744 182.504C38.192 182.205 38.64 182.056 39.088 182.056C39.5733 182.056 39.816 182.784 39.816 184.24C39.816 185.696 39.6853 187.227 39.424 188.832C39.2 190.437 38.9013 192.285 38.528 194.376C37.296 201.245 36.3627 206.733 35.728 210.84C35.1307 214.947 34.832 218.904 34.832 222.712C34.832 223.757 34.0853 224.28 32.592 224.28C30.24 224.28 28.6347 223.832 27.776 222.936C26.9173 222.003 26.488 220.341 26.488 217.952C26.488 215.525 26.9733 211.717 27.944 206.528C23.8373 206.341 21.2427 206.248 20.16 206.248H17.864C17.4533 206.248 17.0427 206.267 16.632 206.304C14.952 212.725 14.112 217.803 14.112 221.536C14.112 223.739 11.9653 224.84 7.672 224.84C6.73867 224.84 6.17867 224.373 5.992 223.44C5.84267 222.469 5.768 220.92 5.768 218.792C5.768 216.627 6.44 212.763 7.784 207.2C5.50667 207.536 3.84533 207.704 2.8 207.704C2.31467 207.704 2.072 207.517 2.072 207.144C2.072 206.323 2.66933 205.389 3.864 204.344C5.096 203.299 6.888 202.459 9.24 201.824C10.6213 197.045 12.0027 193.125 13.384 190.064C9.352 190.139 6.384 190.923 4.48 192.416C3.88267 192.864 3.39733 193.275 3.024 193.648C2.65067 193.984 2.31467 194.152 2.016 194.152C1.75467 194.152 1.49333 193.928 1.232 193.48C0.970667 193.032 0.84 192.435 0.84 191.688C0.84 188.963 3.136 186.891 7.728 185.472C11.3867 184.352 15.6427 183.773 20.496 183.736H20.608C20.8693 183.736 21.224 183.885 21.672 184.184C22.1573 184.483 22.4 184.968 22.4 185.64C22.4 186.312 22.2693 187.077 22.008 187.936C21.784 188.757 21.4667 189.373 21.056 189.784C20.832 191.539 19.8987 195.16 18.256 200.648ZM64.7899 219.24C61.8406 222.712 58.2939 224.448 54.1499 224.448C50.0433 224.448 46.9633 223.403 44.9099 221.312C42.8566 219.184 41.8486 216.552 41.8859 213.416C41.8486 208.973 43.2486 205.147 46.0859 201.936C48.9233 198.725 52.6379 197.12 57.2299 197.12C59.3206 197.12 61.0006 197.381 62.2699 197.904C64.4726 198.8 65.5739 199.64 65.5739 200.424C65.5739 201.021 64.0246 201.339 60.9259 201.376C57.8646 201.376 55.2886 202.44 53.1979 204.568C51.1446 206.659 50.1179 209.309 50.1179 212.52C50.1179 214.2 50.6033 215.619 51.5739 216.776C52.5819 217.896 53.9819 218.456 55.7739 218.456C57.6033 218.456 59.1153 218.083 60.3099 217.336C57.6593 215.544 56.3339 212.949 56.3339 209.552C56.2966 207.76 56.9313 206.136 58.2379 204.68C59.5819 203.187 61.2806 202.44 63.3339 202.44C65.4246 202.403 66.9179 202.963 67.8139 204.12C68.7099 205.277 69.1579 206.771 69.1579 208.6C69.1579 210.392 68.7286 212.296 67.8699 214.312H68.2059C69.8486 214.275 71.2673 213.696 72.4619 212.576C72.9099 212.128 73.2833 211.736 73.5819 211.4C73.9179 211.064 74.2539 210.896 74.5899 210.896C75.1126 210.896 75.3739 211.512 75.3739 212.744C75.3739 215.021 74.7019 216.739 73.3579 217.896C72.0139 219.016 70.5206 219.576 68.8779 219.576C67.2726 219.576 65.9099 219.464 64.7899 219.24ZM64.2859 212.744C64.9206 211.4 65.2379 210.093 65.2379 208.824C65.2379 207.555 64.8273 206.92 64.0059 206.92C63.6699 206.92 63.3899 207.163 63.1659 207.648C62.9419 208.133 62.8299 208.6 62.8299 209.048C62.8299 210.541 63.3153 211.773 64.2859 212.744ZM85.7402 196.896C88.2415 196.859 90.1082 197.325 91.3402 198.296C92.5722 199.229 93.1882 200.592 93.1882 202.384C93.1882 204.139 92.6469 205.651 91.5642 206.92C90.5189 208.152 89.2309 209.029 87.7002 209.552C88.7829 210.672 89.7535 211.811 90.6122 212.968C91.5082 214.125 91.9562 215.339 91.9562 216.608C91.9562 219.109 90.9669 221.051 88.9882 222.432C87.0095 223.776 84.2469 224.448 80.7002 224.448C77.1909 224.448 74.5589 223.757 72.8042 222.376C71.0495 220.957 70.1722 219.371 70.1722 217.616C70.1722 215.824 70.6015 214.2 71.4602 212.744C72.3562 211.288 73.3082 210.56 74.3162 210.56C74.9135 210.56 75.3429 210.784 75.6042 211.232C75.8655 211.643 76.3509 212.875 77.0602 214.928C77.3215 215.675 77.7509 216.384 78.3482 217.056C79.7295 218.587 81.9135 219.352 84.9002 219.352C84.4522 217.933 83.7242 216.72 82.7162 215.712C81.7455 214.667 80.7749 213.659 79.8042 212.688C78.8335 211.717 77.9749 210.691 77.2282 209.608C76.4815 208.488 76.1082 207.181 76.1082 205.688C76.1082 203 77.1162 200.816 79.1322 199.136C81.0362 197.643 83.2389 196.896 85.7402 196.896ZM85.5162 207.256C87.0095 205.651 87.7562 204.363 87.7562 203.392C87.7562 202.944 87.5882 202.552 87.2522 202.216C86.9535 201.843 86.5055 201.656 85.9082 201.656C85.3109 201.656 84.7322 201.731 84.1722 201.88C83.6495 202.029 83.2202 202.141 82.8842 202.216C82.8842 203.635 83.7615 205.315 85.5162 207.256ZM98.3127 220.976C97.9021 219.968 97.6034 218.811 97.4167 217.504C97.2301 216.16 97.1367 214.293 97.1367 211.904C97.1367 209.515 97.5847 206.285 98.4807 202.216H95.9607C95.5127 202.216 95.2887 202.029 95.2887 201.656C95.2887 200.76 95.3634 200.032 95.5127 199.472C95.6994 198.875 96.1101 198.203 96.7447 197.456H98.0887C98.6114 197.456 99.1714 197.437 99.7687 197.4C101.561 191.651 103.39 188.776 105.257 188.776C106.75 188.813 107.795 189.765 108.393 191.632C108.542 192.155 108.71 192.715 108.897 193.312L106.601 197.344C109.214 197.419 110.857 197.456 111.529 197.456C112.238 197.456 112.611 197.531 112.649 197.68C112.723 197.792 112.761 197.979 112.761 198.24C112.761 198.912 112.593 199.752 112.257 200.76C111.958 201.768 111.603 202.253 111.193 202.216L105.593 201.936C104.809 206.491 104.417 210.261 104.417 213.248C104.417 216.235 104.846 217.728 105.705 217.728C106.414 217.728 107.702 217.149 109.569 215.992C111.435 214.797 112.779 213.659 113.601 212.576C114.422 211.493 115.094 210.952 115.617 210.952C116.139 210.952 116.401 211.587 116.401 212.856C116.401 214.125 115.953 215.432 115.057 216.776C114.161 218.083 113.022 219.296 111.641 220.416C110.297 221.499 108.785 222.395 107.105 223.104C105.462 223.813 104.025 224.168 102.793 224.168C101.561 224.168 100.609 223.888 99.9367 223.328C99.3021 222.731 98.7607 221.947 98.3127 220.976ZM127.07 217.896C129.982 217.896 132.801 216.739 135.526 214.424C136.534 213.565 137.356 212.781 137.99 212.072C138.625 211.325 139.11 210.952 139.446 210.952C139.969 210.952 140.23 211.475 140.23 212.52C140.23 213.565 139.95 214.741 139.39 216.048C138.83 217.317 137.897 218.568 136.59 219.8C133.38 222.824 128.974 224.336 123.374 224.336C118.932 224.336 115.908 222.731 114.302 219.52C113.742 218.4 113.462 216.795 113.462 214.704C113.462 212.613 113.873 210.448 114.694 208.208C115.516 205.931 116.598 203.971 117.942 202.328C119.324 200.685 120.91 199.416 122.702 198.52C124.494 197.587 126.398 197.12 128.414 197.12C130.468 197.12 132.036 197.624 133.118 198.632C134.238 199.64 134.798 200.947 134.798 202.552C134.798 204.157 134.388 205.483 133.566 206.528C132.782 207.536 131.756 208.395 130.486 209.104C129.217 209.776 127.798 210.392 126.23 210.952C124.7 211.475 123.188 212.072 121.694 212.744V214.144C121.732 215.488 122.292 216.44 123.374 217C124.457 217.56 125.689 217.859 127.07 217.896ZM126.118 202.104C124.177 202.104 122.833 204.363 122.086 208.88C122.87 208.357 123.598 207.891 124.27 207.48C124.98 207.069 125.596 206.677 126.118 206.304C127.238 205.483 127.817 204.549 127.854 203.504C127.854 202.571 127.276 202.104 126.118 202.104ZM150.316 224.168C144.978 224.205 141.338 222.208 139.396 218.176C138.724 216.757 138.388 214.984 138.388 212.856C138.388 210.691 138.575 208.395 138.948 205.968C139.695 201.115 141.132 196.635 143.26 192.528C144.343 190.437 145.556 188.645 146.9 187.152C149.85 183.867 153.135 182.243 156.756 182.28C158.362 182.28 159.612 182.728 160.508 183.624C161.442 184.483 161.908 185.733 161.908 187.376C161.908 189.019 161.423 190.68 160.452 192.36C159.482 194.003 158.231 195.72 156.7 197.512C155.207 199.267 153.546 201.115 151.716 203.056C149.887 204.997 148.095 207.107 146.34 209.384V211.624C146.34 213.715 146.788 215.245 147.684 216.216C148.58 217.187 149.626 217.672 150.82 217.672C154.031 217.672 156.868 216.085 159.332 212.912C160.34 211.605 161.106 210.952 161.628 210.952C162.151 210.952 162.412 211.587 162.412 212.856C162.412 214.125 162.058 215.432 161.348 216.776C160.676 218.083 159.78 219.296 158.66 220.416C157.54 221.499 156.252 222.395 154.796 223.104C153.34 223.813 151.847 224.168 150.316 224.168ZM153.34 194.096C154.124 193.125 154.74 192.248 155.188 191.464C155.636 190.68 155.86 189.877 155.86 189.056C155.86 188.197 155.562 187.768 154.964 187.768C153.658 187.768 152.202 189.112 150.596 191.8C149.028 194.488 147.852 198.016 147.068 202.384C148.338 200.443 149.495 198.819 150.54 197.512C151.623 196.205 152.556 195.067 153.34 194.096ZM172.27 196.896C174.771 196.859 176.638 197.325 177.87 198.296C179.102 199.229 179.718 200.592 179.718 202.384C179.718 204.139 179.177 205.651 178.094 206.92C177.049 208.152 175.761 209.029 174.23 209.552C175.313 210.672 176.283 211.811 177.142 212.968C178.038 214.125 178.486 215.339 178.486 216.608C178.486 219.109 177.497 221.051 175.518 222.432C173.539 223.776 170.777 224.448 167.23 224.448C163.721 224.448 161.089 223.757 159.334 222.376C157.579 220.957 156.702 219.371 156.702 217.616C156.702 215.824 157.131 214.2 157.99 212.744C158.886 211.288 159.838 210.56 160.846 210.56C161.443 210.56 161.873 210.784 162.134 211.232C162.395 211.643 162.881 212.875 163.59 214.928C163.851 215.675 164.281 216.384 164.878 217.056C166.259 218.587 168.443 219.352 171.43 219.352C170.982 217.933 170.254 216.72 169.246 215.712C168.275 214.667 167.305 213.659 166.334 212.688C165.363 211.717 164.505 210.691 163.758 209.608C163.011 208.488 162.638 207.181 162.638 205.688C162.638 203 163.646 200.816 165.662 199.136C167.566 197.643 169.769 196.896 172.27 196.896ZM172.046 207.256C173.539 205.651 174.286 204.363 174.286 203.392C174.286 202.944 174.118 202.552 173.782 202.216C173.483 201.843 173.035 201.656 172.438 201.656C171.841 201.656 171.262 201.731 170.702 201.88C170.179 202.029 169.75 202.141 169.414 202.216C169.414 203.635 170.291 205.315 172.046 207.256Z"
        fill="white"
      />
    </svg>
  )
}
