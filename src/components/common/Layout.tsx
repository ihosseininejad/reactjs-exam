import ToastModal from '../modals/ToastModal'
import { LayoutProps } from '../../types/components/common/layout.types'
import { useStateProvider } from '../../context/StateContext'

export default function Layout({ children }: LayoutProps) {
    const [{ toast }] = useStateProvider()

    return (
        <>
            {children}

            {
                toast?.type
                && <ToastModal
                    type={toast?.type}
                    title={toast.title}
                    message={toast.message}
                />
            }
        </>
    )
}