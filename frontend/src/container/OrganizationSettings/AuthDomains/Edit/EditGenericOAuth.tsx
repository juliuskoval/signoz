import { InfoCircleFilled } from '@ant-design/icons';
import { Card, Form, Input, Space, Typography } from 'antd';

function EditGenericOAuth(): JSX.Element {
	return (
		<>
			<Typography.Paragraph>
				Enter OAuth 2.0 credentials obtained from the Google API Console below. Read
				the{' '}
				<a
					href="https://signoz.io/docs/userguide/sso-authentication"
					target="_blank"
					rel="noreferrer"
				>
					docs
				</a>{' '}
				for more information. TODO
			</Typography.Paragraph>
			<Form.Item
				label="Client ID"
				name={['genericOAuthConfig', 'clientId']}
				rules={[
					{ required: true, message: 'Please input Generic OAuth Client ID!' },
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Client Secret"
				name={['genericOAuthConfig', 'clientSecret']}
				rules={[
					{ required: true, message: 'Please input Generic OAuth Client Secret!' },
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Provider URL"
				name={['genericOAuthConfig', 'providerRedirectUrl']}
				rules={[
					{
						required: true,
						message: 'Please input the redirect URL to your OAuth provider',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Card style={{ marginBottom: '1rem' }}>
				<Space>
					<InfoCircleFilled />
					<Typography>
						Generic OAuth2 won’t be enabled unless you enter all the attributes above
					</Typography>
				</Space>
			</Card>
		</>
	);
}

export default EditGenericOAuth;
