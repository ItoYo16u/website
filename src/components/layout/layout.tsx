/**
 * @file Layout component. 共通レイアウトを持つと同時に、ドロワーの開閉状態とそのハンドラも持つ
 *
 */
import styled from "@emotion/styled"
import * as React from "react"
import { Fragment } from "react"
import { Footer } from "./footer"
import { Header } from "./header"
import { Drawer } from "./drawer"
import useSiteMetaData from "../../hooks/useSiteMetaData"

interface IPassedProps {
  className?: string
}

interface IContainerProps {
  isOpenDrawer: boolean
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>
  siteTitle: string
}

interface IProps extends IPassedProps, IContainerProps {}

export const DrawerContext = React.createContext<{
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>
}>({
  setDrawerState: () => {
    // no op
  },
})

const Component: React.FC<IProps> = ({
  children,
  setDrawerState,
  isOpenDrawer,
  siteTitle,
  className,
}) => (
  <div className={className}>
    <Drawer
      open={isOpenDrawer}
      onClose={() => {
        setDrawerState(false)
      }}
    >
      <Fragment /*isOpenDrawer={isOpenDrawer}*/></Fragment>
    </Drawer>
    <DrawerContext.Provider value={{ setDrawerState }}>
      <Header siteTitle={siteTitle} />
      <div>
        <main className="body">{children}</main>
        <Footer></Footer>
      </div>
    </DrawerContext.Provider>
  </div>
)

const StyledComponent = styled(Component)`
  width: 100%;
  min-height: 85vh;
  /* 9vh は headerの高さ分 */
  padding-top: 70px;
  background-color: #eeeef1;
`

const ContainerComponent: React.FC = ({ children }) => {
  const [isOpenDrawer, setDrawerState] = React.useState(false)
  const data = useSiteMetaData()
  const siteTitle = data?.siteTitle
  if (!siteTitle) {
    throw new Error("should set title as siteMetadata")
  }

  const containerProps = {
    isOpenDrawer,
    setDrawerState,
    siteTitle,
  }
  return <StyledComponent {...containerProps}>{children}</StyledComponent>
}

export const Layout = ContainerComponent
