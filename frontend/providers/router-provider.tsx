import React, { FC } from "react"
import { BrowserRouter } from "react-router-dom"

type PropsWithChildren<P = unknown> = Pick<React.PropsWithChildren, 'children'> & P

export const RouterProvider: FC<PropsWithChildren> = ({
    children
}) => {
  return (
    <BrowserRouter>
        {children}
    </BrowserRouter>
  )
}
