const IF = (props) => {
    if (props.condition) {
        return props.children;
    } else {
        return null;
    }
}

const If=(props)=>{
    if (props.condition !== 0) {
        return props.children;
    } else {
        return null;
    }
}

const ELSE = (props) => {
    if (props.condition) {
        console.log(props.condition);
        return null;
    } else {
        return props.children;
    }
}

export {IF,ELSE,If};