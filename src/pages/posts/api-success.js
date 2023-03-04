import { withRouter } from 'next/router'

function ApiSuccess({router}) {
	return <p>{router.pathname}</p>
}

export default withRouter(ApiSuccess);