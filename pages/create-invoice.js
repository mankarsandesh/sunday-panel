import MainLayout from '@/components/Layout/MainLayout'
import CreateInvoicePage from '@/components/Product/CreateInvoice'
import InvoicePreview from '@/components/Product/InvoicePreview'

const PageHeader = () => {
	return <></>
}
export default function CreateInvoice() {
	return (
		<>
			<MainLayout PageHeader={PageHeader}>
				<div className="flex ">
					<CreateInvoicePage />
					<InvoicePreview />
				</div>
			</MainLayout>
		</>
	)
}
