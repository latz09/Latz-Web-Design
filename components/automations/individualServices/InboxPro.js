const InboxPro = ({data}) => {
   
    return (
		<div className="space-y-4">
			<div>{data.serviceName}</div>
            <div>
                {data.headline}
            </div>
		</div>
	);
}
 
export default InboxPro;