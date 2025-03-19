import React from 'react';

export interface IconProps {
    name: string;
    className?: string;
}

const Contracts = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 12"
            width="128"
            height="128"
        >
            <path
                d="M6 8.06511L10.8875 5.6216C10.9873 5.5755 11.1011 5.57005 11.2048 5.60643C11.3086 5.6428 11.3941 5.71813 11.4432 5.81646C11.4924 5.91479 11.5014 6.02839 11.4682 6.13321C11.4351 6.23803 11.3624 6.32583 11.2657 6.37801L6.1891 8.91628C6.13038 8.94563 6.06564 8.9609 6 8.9609C5.93436 8.9609 5.86962 8.94563 5.8109 8.91628L0.73434 6.37801C0.637577 6.32583 0.564927 6.23803 0.531778 6.13321C0.498629 6.02839 0.507586 5.91479 0.55675 5.81646C0.605915 5.71813 0.691426 5.6428 0.79517 5.60643C0.898914 5.57005 1.01274 5.5755 1.11254 5.6216L6 8.06511Z"
                fill="currentColor"
            ></path>
            <path
                d="M6 10.6034L10.8875 8.15988C10.9873 8.11377 11.1011 8.10833 11.2048 8.14471C11.3086 8.18108 11.3941 8.25641 11.4432 8.35473C11.4924 8.45306 11.5014 8.56667 11.4682 8.67149C11.4351 8.77631 11.3624 8.8641 11.2657 8.91628L6.1891 11.4546C6.13038 11.4839 6.06564 11.4992 6 11.4992C5.93436 11.4992 5.86962 11.4839 5.8109 11.4546L0.73434 8.91628C0.637577 8.8641 0.564927 8.77631 0.531778 8.67149C0.49863 8.56667 0.507586 8.45306 0.55675 8.35473C0.605915 8.25641 0.691426 8.18108 0.79517 8.14471C0.898914 8.10833 1.01274 8.11377 1.11254 8.15988L6 10.6034ZM0.73434 3.84015C0.663942 3.80506 0.60472 3.75105 0.563324 3.68416C0.521929 3.61728 0.5 3.54018 0.5 3.46152C0.5 3.38287 0.521929 3.30577 0.563324 3.23888C0.60472 3.172 0.663942 3.11798 0.73434 3.0829L5.8109 0.544617C5.86962 0.515275 5.93436 0.5 6 0.5C6.06564 0.5 6.13038 0.515275 6.1891 0.544617L11.2657 3.0829C11.3361 3.11798 11.3953 3.172 11.4367 3.23888C11.4781 3.30577 11.5 3.38287 11.5 3.46152C11.5 3.54018 11.4781 3.61728 11.4367 3.68416C11.3953 3.75105 11.3361 3.80506 11.2657 3.84015L6.1891 6.37843C6.13038 6.40777 6.06564 6.42305 6 6.42305C5.93436 6.42305 5.86962 6.40777 5.8109 6.37843L0.73434 3.84015ZM6 5.52684L10.1306 3.46152L6 1.39621L1.86937 3.46152L6 5.52684Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};

const UiWrong = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
        >
            <path
                id="Vector"
                d="M24 0C17.6348 0 11.5303 2.52856 7.02944 7.02944C2.52856 11.5303 0 17.6348 0 24C0 30.3652 2.52856 36.4697 7.02944 40.9706C11.5303 45.4714 17.6348 48 24 48C27.1517 48 30.2726 47.3792 33.1844 46.1731C36.0962 44.967 38.742 43.1992 40.9706 40.9706C43.1992 38.742 44.967 36.0962 46.1731 33.1844C47.3792 30.2726 48 27.1517 48 24C48 17.6348 45.4714 11.5303 40.9706 7.02944C36.4697 2.52856 30.3652 0 24 0ZM33.6233 31.2621C33.9076 31.5848 34.0581 32.0037 34.0441 32.4335C34.0301 32.8633 33.8526 33.2716 33.5478 33.575C33.2431 33.8784 32.8341 34.0541 32.4042 34.0663C31.9744 34.0785 31.5561 33.9262 31.2347 33.6405L24 26.3887L16.7688 33.6405C16.6133 33.7995 16.4278 33.926 16.223 34.0125C16.0182 34.0991 15.7982 34.144 15.5759 34.1446C15.3535 34.1453 15.1333 34.1016 14.928 34.0162C14.7227 33.9309 14.5364 33.8055 14.3801 33.6474C14.0643 33.3308 13.8869 32.9019 13.8869 32.4547C13.8869 32.0076 14.0643 31.5787 14.3801 31.2621L21.6216 24L14.3801 16.7344C14.0887 16.4129 13.9323 15.9916 13.9433 15.5579C13.9543 15.1241 14.1318 14.7113 14.4391 14.4049C14.7463 14.0985 15.1597 13.9222 15.5935 13.9125C16.0272 13.9027 16.4481 14.0604 16.7688 14.3526L24 21.6079L31.2347 14.3526C31.5553 14.0604 31.9762 13.9027 32.41 13.9125C32.8438 13.9222 33.2571 14.0985 33.5644 14.4049C33.8716 14.7113 34.0491 15.1241 34.0601 15.5579C34.0711 15.9916 33.9147 16.4129 33.6233 16.7344L26.3818 24L33.6233 31.2621Z"
                fill="#FF4D5C"
            ></path>
        </svg>
    );
};

const UiTrue = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="66"
            viewBox="0 0 66 66"
            fill="none"
        >
            <path
                id="true"
                d="M66 33.4062C66 14.7738 51.2262 0 32.5938 0C14.7738 0 0 14.7738 0 33.4062C0 51.2262 14.7738 66 32.5938 66C51.2262 66 66 51.2262 66 33.4062ZM18.2211 34.8937C17.9533 34.6005 17.792 34.2258 17.763 33.8299C17.734 33.4339 17.839 33.0397 18.0612 32.7106L18.2845 32.406C18.3942 32.2559 18.5329 32.1292 18.6924 32.0336C18.8519 31.938 19.0289 31.8753 19.213 31.8493C19.3971 31.8232 19.5846 31.8344 19.7643 31.882C19.9441 31.9297 20.1124 32.0129 20.2595 32.1268L27.3951 37.5946C27.7223 37.8257 28.1148 37.9462 28.5153 37.9384C28.9158 37.9307 29.3033 37.7951 29.6213 37.5515L49.4949 20.9982C49.7999 20.7569 50.1817 20.6338 50.5702 20.6515C50.9587 20.6692 51.3277 20.8266 51.6095 21.0946L51.4775 20.9626C51.6117 21.095 51.718 21.2529 51.7903 21.427C51.8626 21.601 51.8994 21.7878 51.8984 21.9763C51.8975 22.1648 51.8589 22.3512 51.7848 22.5246C51.7108 22.6979 51.6028 22.8547 51.4673 22.9858L29.5604 44.5475C29.4263 44.6817 29.2666 44.7877 29.0909 44.8593C28.9151 44.9308 28.7268 44.9664 28.5371 44.9641C28.3474 44.9617 28.16 44.9214 27.9861 44.8455C27.8122 44.7696 27.6553 44.6596 27.5245 44.5221L18.2211 34.8962V34.8937Z"
                fill="#00B862"
            ></path>
        </svg>
    );
};

const Loading = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
        >
            <path
                d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM1.42504 6C1.42504 8.52668 3.47332 10.575 6 10.575C8.52668 10.575 10.575 8.52668 10.575 6C10.575 3.47332 8.52668 1.42504 6 1.42504C3.47332 1.42504 1.42504 3.47332 1.42504 6Z"
                fill="currentColor"
                fill-opacity="0.4"
            ></path>
            <path
                d="M10.5136 9.9531C9.66361 10.9237 8.52336 11.5944 7.26205 11.8658C6.00073 12.1371 4.68553 11.9947 3.51154 11.4596C2.33756 10.9245 1.36732 10.0253 0.744756 8.89524C0.122192 7.7652 -0.119536 6.46459 0.0554281 5.18633C0.230393 3.90806 0.81273 2.72024 1.71606 1.79907C2.61939 0.87789 3.79558 0.272425 5.07018 0.0724851C6.34477 -0.127455 7.64987 0.0887818 8.79187 0.689118C9.93387 1.28945 10.8519 2.24191 11.4099 3.4052L10.125 4.02148C9.69958 3.13448 8.99955 2.40824 8.12878 1.95048C7.25802 1.49273 6.26289 1.32785 5.29102 1.48031C4.31915 1.63276 3.4223 2.09442 2.73352 2.79681C2.04474 3.49921 1.60071 4.40491 1.4673 5.37958C1.33389 6.35425 1.51821 7.34596 1.99291 8.2076C2.46761 9.06925 3.20741 9.75493 4.10257 10.1629C4.99772 10.5709 6.00056 10.6795 6.9623 10.4726C7.92405 10.2657 8.79348 9.75427 9.44163 9.01421L10.5136 9.9531Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};

const Open = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
        >
            <path
                d="M9.71774 0H2.45968C2.21774 0 2.05645 0.16129 2.05645 0.403226C2.05645 0.645161 2.21774 0.806452 2.45968 0.806452H8.75L0.120968 9.35484C-0.0403226 9.51613 -0.0403226 9.75806 0.120968 9.91935C0.201613 10 0.282258 10 0.443548 10C0.604839 10 0.685484 10 0.766129 9.91935L9.31452 1.37097V7.66129C9.31452 7.90323 9.47581 8.06452 9.71774 8.06452C9.95968 8.06452 10.121 7.90323 10.121 7.66129V0.403226C10.121 0.16129 9.95968 0 9.71774 0Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};

const Reduce = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <g id="Group 121">
                <rect id="Rectangle 14" x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="black"></rect>
                <line id="Line 31" x1="11" y1="15.5" x2="21" y2="15.5" stroke="black"></line>
            </g>
        </svg>
    );
};

const ReduceDark = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
        >
            <g id="Group 101">
                <rect id="Rectangle 39" width="44" height="44" rx="8" fill="#9BFF21"></rect>
                <g id="Group 105">
                    <line id="Line 31" x1="15" y1="22.5771" x2="30" y2="22.5771" stroke="black"></line>
                </g>
            </g>
        </svg>
    );
};

const Push = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <g id="Group 122">
                <rect id="Rectangle 14" x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="black"></rect>
                <path id="Vector" d="M11 16.0514H21M15.9486 11L15.9486 21" stroke="black"></path>
            </g>
        </svg>
    );
};

const PushDark = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
        >
            <g id="Group 100">
                <rect id="Rectangle 39" width="44" height="44" rx="8" fill="#9BFF21"></rect>
                <g id="Group 105">
                    <line id="Line 31" x1="15" y1="22.5771" x2="30" y2="22.5771" stroke="black"></line>
                    <line id="Line 32" x1="22.4231" y1="15" x2="22.4231" y2="30" stroke="black"></line>
                </g>
            </g>
        </svg>
    );
};

const Refresh = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
        >
            <path
                d="M11.4659 5.58816C11.1889 4.5944 10.624 3.70483 9.84245 3.03146C9.06086 2.3581 8.0975 1.93105 7.07369 1.8041C6.04988 1.67715 5.0114 1.85598 4.08902 2.31806C3.16664 2.78014 2.4016 3.50481 1.89026 4.40081C1.37891 5.29682 1.14411 6.3241 1.21544 7.35328C1.28676 8.38246 1.66102 9.36753 2.29107 10.1844C2.92113 11.0013 3.77881 11.6136 4.75611 11.944C5.73341 12.2744 6.78663 12.3083 7.78315 12.0413C8.96922 11.7257 10.0056 11.001 10.709 9.99521C10.7814 9.89196 10.8918 9.82169 11.016 9.79985C11.1402 9.77802 11.2679 9.80641 11.3712 9.87878C11.4744 9.95116 11.5447 10.0616 11.5665 10.1858C11.5884 10.3099 11.56 10.4377 11.4876 10.541C10.6559 11.7295 9.43098 12.5861 8.02914 12.9594C4.73328 13.8425 1.34585 11.8868 0.462729 8.59091C-0.420395 5.29504 1.53533 1.90762 4.8312 1.0245C8.01383 0.171711 11.2813 1.96608 12.2977 5.05697L12.8892 4.03259C12.9197 3.97739 12.961 3.92883 13.0105 3.88974C13.0601 3.85065 13.1169 3.82182 13.1777 3.80493C13.2385 3.78804 13.3021 3.78343 13.3647 3.79137C13.4273 3.7993 13.4877 3.81963 13.5423 3.85115C13.597 3.88268 13.6448 3.92477 13.683 3.97498C13.7213 4.02519 13.7491 4.08251 13.7649 4.1436C13.7808 4.20468 13.7843 4.26831 13.7752 4.33076C13.7662 4.39322 13.7449 4.45325 13.7124 4.50736L12.4455 6.70262C12.4143 6.7567 12.3727 6.8041 12.3232 6.84211C12.2737 6.88013 12.2171 6.90801 12.1568 6.92417C12.0965 6.94033 12.0336 6.94444 11.9717 6.93629C11.9098 6.92813 11.8501 6.90785 11.7961 6.87662L9.60127 5.60893C9.54491 5.57899 9.49516 5.538 9.45498 5.48842C9.41481 5.43883 9.38503 5.38166 9.36743 5.32032C9.34982 5.25897 9.34476 5.19471 9.35253 5.13137C9.3603 5.06803 9.38075 5.0069 9.41266 4.95163C9.44457 4.89636 9.48729 4.84808 9.53826 4.80968C9.58923 4.77128 9.64741 4.74354 9.70934 4.72811C9.77127 4.71268 9.83566 4.70988 9.89869 4.71988C9.96172 4.72989 10.0221 4.75248 10.0762 4.78632L11.4653 5.58833L11.4659 5.58816Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};

const Close = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="currentColor"
        >
            <path
                d="M12.6667 -0.333252C6.04275 -0.333252 0.666748 5.04275 0.666748 11.6667C0.666748 18.2907 6.04275 23.6667 12.6667 23.6667C19.2907 23.6667 24.6667 18.2907 24.6667 11.6667C24.6667 5.04275 19.2907 -0.333252 12.6667 -0.333252ZM16.5067 14.6107C16.8267 14.9307 16.8267 15.4427 16.5067 15.7307C16.3467 15.8907 16.1547 15.9547 15.9307 15.9547C15.7067 15.9547 15.5147 15.8907 15.3547 15.7307L12.6667 13.0107L9.94675 15.7307C9.78675 15.8907 9.59475 15.9547 9.37075 15.9547C9.14675 15.9547 8.95475 15.8907 8.79475 15.7307C8.47475 15.4107 8.47475 14.8987 8.79475 14.6107L11.5147 11.8907L8.57075 8.94675C8.25075 8.62675 8.25075 8.11475 8.57075 7.82675C8.89075 7.50675 9.40275 7.50675 9.69075 7.82675L12.6347 10.7707L15.5787 7.82675C15.8987 7.50675 16.4107 7.50675 16.6987 7.82675C17.0187 8.14675 17.0187 8.65875 16.6987 8.94675L13.7547 11.8907L16.5067 14.6107Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};

const Close2 = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
        >
            <path
                id="close"
                d="M7.15252 7.99476C7.09247 7.94808 7.05191 7.9229 7.01901 7.89007C4.75756 5.62979 2.49708 3.36831 0.234718 1.10889C0.0750904 0.949409 -0.0231328 0.772815 0.00732295 0.541893C0.0382719 0.3071 0.165249 0.140838 0.382435 0.0503342C0.606057 -0.0428581 0.815672 -0.00377086 1.00487 0.143798C1.05155 0.180222 1.09219 0.224586 1.13421 0.266607C3.38325 2.5153 5.63215 4.7641 7.88035 7.01376C7.91596 7.04937 7.94176 7.0948 7.97212 7.13568C7.99081 7.13983 8.00953 7.14402 8.02824 7.14816C8.05527 7.10468 8.07507 7.05396 8.11031 7.01872C10.3701 4.75665 12.6315 2.49629 14.8913 0.234204C15.065 0.0602233 15.259 -0.0374325 15.509 0.018695C15.9739 0.123058 16.1512 0.676046 15.8336 1.03096C15.7997 1.06896 15.7623 1.10396 15.7262 1.13999C13.4773 3.38886 11.2285 5.63785 8.97891 7.88603C8.9433 7.92164 8.89896 7.94864 8.83213 8.00016C8.90103 8.05323 8.94932 8.08262 8.98818 8.12151C11.2438 10.3756 13.4983 12.631 15.7542 14.8848C15.8917 15.0222 15.9926 15.1718 15.9914 15.374C15.9899 15.6332 15.8723 15.826 15.6412 15.9354C15.4049 16.0473 15.1776 16.0121 14.9752 15.8431C14.933 15.8078 14.895 15.7671 14.856 15.7279C12.6101 13.4821 10.3642 11.2363 8.11855 8.99016C8.08257 8.95418 8.05014 8.91455 8.00627 8.86557C7.96164 8.90801 7.92538 8.94084 7.89096 8.97536C5.62692 11.2391 3.36247 13.5025 1.09993 15.7678C0.917618 15.9503 0.712886 16.0419 0.456121 15.9732C0.0134142 15.855 -0.147175 15.3202 0.154867 14.9748C0.188381 14.9365 0.225544 14.9012 0.261598 14.8652C2.51362 12.613 4.76568 10.3609 7.01812 8.10911C7.05104 8.07636 7.08887 8.04857 7.1524 7.99456L7.15252 7.99476Z"
                fill="#999999"
            ></path>
        </svg>
    );
};

const Copy = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
        >
            <path
                d="M6.8805 1.87421H1.25157C0.559748 1.87421 0 2.43396 0 3.12579V8.74843C0 9.44025 0.559748 10 1.25157 10H6.87421C7.56604 10 8.12579 9.44025 8.12579 8.74843V3.12579C8.13207 2.43396 7.57233 1.87421 6.8805 1.87421ZM7.37736 8.74843V8.81132C7.34591 9.06289 7.13208 9.25157 6.8805 9.25157H1.25786L1.19497 9.24528C0.943396 9.21384 0.754717 9 0.754717 8.74843V3.12579L0.761006 3.06289C0.792453 2.81132 1.00629 2.62893 1.25786 2.62893H6.94968C7.20126 2.66038 7.38994 2.87421 7.38994 3.12579V8.74843H7.37736Z"
                fill="#9BFF21"
            ></path>
            <path
                d="M8.75472 0H3.13208C2.44025 0 1.8805 0.559748 1.8805 1.25157H2.62893V1.18868C2.66038 0.937107 2.87421 0.748428 3.12579 0.748428H8.74843L8.81132 0.754717C9.06289 0.786164 9.25157 1 9.25157 1.25157V6.87421L9.24528 6.93711C9.21384 7.18868 9 7.37107 8.74843 7.37107V8.1195C9.44025 8.1195 10 7.55975 10 6.86792V1.25157C10.0063 0.559748 9.44654 0 8.75472 0Z"
                fill="#9BFF21"
            ></path>
        </svg>
    );
};

const iconMap = {
    'ez-icon-contracts': Contracts,
    'ez-icon-ui-wrong': UiWrong,
    'ez-icon-ui-true': UiTrue,
    'ez-icon-loading': Loading,
    'ez-icon-open': Open,
    'ez-icon-reduce': Reduce,
    'ez-icon-reduceDark': ReduceDark,
    'ez-icon-push': Push,
    'ez-icon-pushDark': PushDark,
    'ez-icon-refresh': Refresh,
    'ez-icon-close': Close,
    'ez-icon-close2': Close2,
    'ez-icon-copy': Copy,
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
    const IconComponent = iconMap[name];
    return IconComponent ? <IconComponent className={className} /> : <></>;
};

export default Icon;
