import styles from "./fullMessage.module.css";

const FullMessage = ({
  icon = "01n",
  message,
}: {
  icon?: string;
  message: string;
}) => {
  return (
    <div className={styles.full_container}>
      {icon === "01n" && (
        <svg
          className={[styles.loading, styles.rotate].join(" ")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <g>
            <path
              fill="none"
              stroke="#72b9d5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"
            />
            <animateTransform
              attributeName="transform"
              dur="10s"
              repeatCount="indefinite"
              type="rotate"
              values="-5 32 32;15 32 32;-5 32 32"
            />
          </g>
        </svg>
      )}
      {icon === "11d" && (
        <svg
          className={styles.loading}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <defs>
            <clipPath id="a">
              <path
                fill="none"
                d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <g>
              <path
                fill="none"
                stroke="#f59e0b"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
              />
              <animateTransform
                attributeName="transform"
                dur="45s"
                from="0 19 24"
                repeatCount="indefinite"
                to="360 19 24"
                type="rotate"
              />
            </g>
          </g>
          <path
            fill="none"
            stroke="#e5e7eb"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
          />
          <g>
            <path
              fill="none"
              stroke="#2885c7"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M24.39 43.03l-.78 4.94"
            />
            <animateTransform
              attributeName="transform"
              dur="0.7s"
              repeatCount="indefinite"
              type="translate"
              values="1 -5; -2 10"
            />
            <animate
              attributeName="opacity"
              dur="0.7s"
              repeatCount="indefinite"
              values="0;1;1;0"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke="#2885c7"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M31.39 43.03l-.78 4.94"
            />
            <animateTransform
              attributeName="transform"
              begin="-0.4s"
              dur="0.7s"
              repeatCount="indefinite"
              type="translate"
              values="1 -5; -2 10"
            />
            <animate
              attributeName="opacity"
              begin="-0.4s"
              dur="0.7s"
              repeatCount="indefinite"
              values="0;1;1;0"
            />
          </g>
          <g>
            <path
              fill="none"
              stroke="#2885c7"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M38.39 43.03l-.78 4.94"
            />
            <animateTransform
              attributeName="transform"
              begin="-0.2s"
              dur="0.7s"
              repeatCount="indefinite"
              type="translate"
              values="1 -5; -2 10"
            />
            <animate
              attributeName="opacity"
              begin="-0.2s"
              dur="0.7s"
              repeatCount="indefinite"
              values="0;1;1;0"
            />
          </g>
          <g>
            <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" />
            <animate
              attributeName="opacity"
              dur="2s"
              repeatCount="indefinite"
              values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"
            />
          </g>
        </svg>
      )}
      {icon === "solar-eclipse" && (
        <svg
          className={styles.loading}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <defs>
            <clipPath id="a">
              <path
                fill="none"
                d="M30 16V7h27v29h-9l-11.27-3-6.19-8.74L30 16z"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <g>
              <path
                fill="none"
                stroke="#f59e0b"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"
              />
              <animateTransform
                attributeName="transform"
                dur="45s"
                from="0 32 32"
                repeatCount="indefinite"
                to="360 32 32"
                type="rotate"
              />
            </g>
          </g>
          <path
            fill="none"
            stroke="#72b9d5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"
          />
        </svg>
      )}

      <p className={styles.loading_text}>{message}</p>
    </div>
  );
};

export { FullMessage };
