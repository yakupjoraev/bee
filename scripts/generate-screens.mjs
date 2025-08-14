import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const screens = [
  'AuthScreen', 'BiometricSetupScreen', 'CardCreationDetailsScreen', 'CardDetailsScreen', 'CardLockConfirmationScreen',
  'CardManagementScreen', 'CardNumberScreen', 'CardRechargeAssetSelection', 'CardRechargeScreen', 'ChangePasswordScreen',
  'ContactSupportScreen', 'CryptoAssetsScreen', 'DepositAddressScreen', 'DepositScreen', 'DeviceVerificationScreen',
  'EditProfileScreen', 'ForgotPasswordScreen', 'HelpCenterScreen', 'HomeScreen', 'KYC-PersonalInfoScreen',
  'KYC-SumSubDirectKYCScreen', 'KYC-SumSubKYCScreen', 'KycScreen', 'LegalNoticeScreen', 'MyCardsScreen',
  'NotificationsScreen', 'ParametersScreen', 'PrivacyPolicyScreen', 'ProfileScreen', 'RequestCard', 'RequestCardSimplified',
  'SelectCardScreen', 'SelectNetworkScreen', 'SignUpScreen', 'SumSubKYCScreen', 'SupportContactScreen', 'SwapScreen',
  'TermsOfServiceScreen', 'ThreeDSDebugScreen', 'ThreeDSecureApprovalScreen', 'TopUpCardScreen', 'TransactionDetailsScreen',
  'TransactionsScreen', 'WalletScreen', 'WithdrawScreen'
];

const outDir = join(process.cwd(), 'src', 'pages', 'screens');
mkdirSync(outDir, { recursive: true });

for (const name of screens) {
  const file = join(outDir, `${name}.tsx`);
  if (existsSync(file)) continue;
  const content = `import React from 'react';

export default function ${name}() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 8 }}>${name}</h1>
      <p>Вёрстка перенесена как отдельная страница-заглушка. Логика удалена.</p>
      <div style={{ marginTop: 16, padding: 16, border: '1px dashed #e0e0e0', borderRadius: 8 }}>
        <div style={{ height: 240, display: 'grid', placeItems: 'center', color: '#999' }}>
          Макет «${name}» — перенести точную верстку из React Native.
        </div>
      </div>
    </div>
  );
}
`;
  writeFileSync(file, content, 'utf8');
  console.log('Created', file);
}

console.log('Done');


