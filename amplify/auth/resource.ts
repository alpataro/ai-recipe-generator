import { defineAuth } from "@aws-amplify/backend";
export const authORG = defineAuth({
	loginWith: {
		email: {
			verificationEmailStyle: "CODE",
			verificationEmailSubject: "Welcome to the AI-Powered Recipe Generator!",
			verificationEmailBody: (createCode) => `Use this code to confirm your account: ${createCode()}`,
		},
	},
});

export const auth = defineAuth({
	loginWith: {
		email: true,
	},
});

export const authOLD = defineAuth({
	loginWith: {
		email: {
			verificationEmailStyle: "CODE",
			verificationEmailSubject: "Welcome to the AI-Powered Recipe Generator!",
			verificationEmailBody: (createCode) => `Use this code to confirm your account: ${createCode()}`,
		},
	},
});
