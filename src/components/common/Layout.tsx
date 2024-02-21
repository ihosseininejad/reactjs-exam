import { useContext } from 'react'
import { ToastContext, ToastContextType } from '../../context/ToastContext'
import ToastModal from '../modals/ToastModal'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    const { toast } = useContext(ToastContext) as ToastContextType

    return (
        <>
            {children}

            {toast && <ToastModal type={toast?.type} title={toast.title} message={toast.message} />}
        </>
    )
}