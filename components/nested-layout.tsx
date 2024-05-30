
import { FC, ReactNode } from "react";

const NestedLayout: FC<{ children?: ReactNode }> = ({ children }) => {
    return <div>
        NestedLayout
        {children}
    </div>
}

export default NestedLayout