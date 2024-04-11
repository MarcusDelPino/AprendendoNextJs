interface IfProps {
    teste: boolean
    children: any
}

export default function If(props: IfProps) {
    
        if (props.teste) {
            console.log(props.children)
            return props.children
        } else {
            return null
        }
    
}
