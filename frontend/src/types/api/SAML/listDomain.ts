import { Organization } from '../user/getOrganization';

export interface SAMLConfig {
	samlEntity: string;
	samlIdp: string;
	samlCert: string;
}

export function isSAMLConfig(
	value: SAMLConfig | undefined,
): value is SAMLConfig {
	return (
		value?.samlEntity !== undefined ||
		value?.samlIdp !== undefined ||
		value?.samlCert !== undefined
	);
}

export interface GoogleAuthConfig {
	clientId: string;
	clientSecret: string;
}

export interface GenericOAuthConfig {
	clientId: string;
	clientSecret: string;
	providerRedirectUrl: string;
}

export function isGoogleAuthConfig(
	value: GoogleAuthConfig | undefined,
): value is GoogleAuthConfig {
	return value?.clientId !== undefined || value?.clientSecret !== undefined;
}

export function isGenericOAuthConfig(
	value: GenericOAuthConfig | undefined,
): value is GenericOAuthConfig {
	return (
		value?.clientId !== undefined ||
		value?.clientSecret !== undefined ||
		value?.providerRedirectUrl !== undefined
	);
}

export const SAML = 'SAML';
export const GOOGLE_AUTH = 'GOOGLE_AUTH';
export const GENERIC_OAUTH = 'GENERIC_OAUTH';

export interface AuthDomain {
	id: string;
	name: string;
	orgId: Organization['id'];
	ssoEnabled: boolean;
	ssoType: 'SAML' | 'GOOGLE_AUTH' | 'GENERIC_OAUTH';
	samlConfig?: SAMLConfig;
	googleAuthConfig?: GoogleAuthConfig;
	genericOAuthConfig?: GenericOAuthConfig;
}

export interface Props {
	orgId: Organization['id'];
}

export interface PayloadProps {
	data: AuthDomain[];
	status: string;
}
