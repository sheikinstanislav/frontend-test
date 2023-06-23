import { FC, SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  color?: string
}

export const Scissors: FC<Props> = ({ width = 40, height = 40, ...params }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 47.5 47.5"
      id="scissors"
      {...params}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 38h38V0H0v38Z"></path>
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
        <path
          fill="#dd2e44"
          d="M5.876 28.827c-.958 2.133-.252 4.527 1.575 5.347 1.826.822 4.084-.242 5.042-2.373.958-2.132.253-4.527-1.574-5.347-1.827-.821-4.085.241-5.043 2.373m11.93-2.501c-.919 2.046-2.003 4.066-3.026 6.26-.028.068-.05.137-.081.206-.064.142-.137.277-.209.413l-.052.111-.002-.003c-1.638 2.99-5.094 4.362-7.977 3.067-3.045-1.368-4.295-5.193-2.789-8.543 1.506-3.351 5.195-4.957 8.24-3.589.106.047.205.105.306.159 1.935-.439 1.994-1.878 1.994-1.878s4.618 1.523 3.596 3.797"
        ></path>
        <path
          fill="#99aab5"
          d="M27.977 2.132c1.163.657 2.187 2.474 1.529 3.638L17.753 26.441c-1.103-.496-2.937-2.313-3.544-3.912L27.977 2.132Z"
        ></path>
        <path
          fill="#dd2e44"
          d="M32.124 28.827c-.959-2.132-3.216-3.194-5.044-2.373-1.826.82-2.531 3.215-1.572 5.347.956 2.131 3.214 3.195 5.041 2.373 1.827-.82 2.532-3.214 1.575-5.347m-.584 7.553c-2.882 1.295-6.338-.077-7.976-3.067l-.003.003-.052-.113c-.072-.135-.145-.269-.208-.411-.031-.068-.053-.137-.081-.206-1.024-2.194-2.108-4.214-3.027-6.26-1.021-2.274 3.597-3.797 3.597-3.797s.059 1.44 1.993 1.878c.102-.054.2-.111.307-.159 3.045-1.368 6.733.238 8.24 3.589 1.505 3.35.255 7.175-2.79 8.543"
        ></path>
        <path
          fill="#ccd6dd"
          d="M10.022 2.132c-1.163.657-2.187 2.474-1.529 3.638l11.753 20.671c1.103-.496 2.938-2.313 3.544-3.912L10.022 2.132Z"
        ></path>
        <path
          fill="#99aab5"
          d="M20.563 19.605a1.563 1.563 0 1 0-3.126.002 1.563 1.563 0 0 0 3.126-.002"
        ></path>
      </g>
    </svg>
  )
}