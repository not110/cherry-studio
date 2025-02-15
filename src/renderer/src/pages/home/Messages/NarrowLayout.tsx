import { useSettings } from '@renderer/hooks/useSettings'
import { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  id?: string // 添加 id 属性
}

const NarrowLayout: FC<Props> = ({ children, id = 'narrow-layout-container', ...props }) => {
  const { narrowMode } = useSettings()

  if (narrowMode) {
    return (
      <Container id={id} {...props}>
        {children}
      </Container>
    )
  }

  return children
}

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`

export default NarrowLayout
