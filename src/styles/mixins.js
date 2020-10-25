//Media Queries 
export const xs = (content) => {
    return `@media(min-width: 375px) {
        ${content}
    }`;
};

export const sm = (content) => {
    return `@media(min-width: 480px) {
        ${content}
    }`;
};

export const md = (content) => {
    return `@media(min-width: 768px) {
        ${content}
    }`;
};

export const lg = (content) => {
    return `@media(min-width: 992px) {
        ${content}
    }`;
};

export const xl = (content) => {
    return `@media(min-width: 1200px) {
        ${content}
    }`;
};

export const xxl = (content) => {
    return `@media(min-width: 1400px) {
        ${content}
    }`;
};