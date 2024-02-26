import { useContext } from 'react'
import { ToastContext } from '../../context/ToastContext'
import ToastModal from '../modals/ToastModal'
import { ToastContextType } from '../../types/context/toastcontext.types'
import { LayoutProps } from '../../types/components/common/layout.types'

export default function Layout({ children }: LayoutProps) {
    const { toast } = useContext(ToastContext) as ToastContextType

    return (
        <>
            {children}

            {
                toast
                && <ToastModal
                    type={toast?.type}
                    title={toast.title}
                    message={toast.message}
                />
            }
        </>
    )
}