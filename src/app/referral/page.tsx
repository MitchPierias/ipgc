import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { Heading, Text } from "src/elements/Text/Text";
import { Button } from "src/elements/Buttons/Button";
import {
  REFERRAL_FORM_PATH,
  REFERRAL_FORM_DOWNLOAD_NAME,
} from "src/constants/app";

export default function ReferralPage() {
  return (
    <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri">
      <Header />
      <main role="main" className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <Heading
                testID="referral-form-title"
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Referral Form
              </Heading>
              <Text
                testID="all-referrals-accepted"
                className="text-xl font-semibold text-green-700 mb-4"
              >
                All referrals accepted
              </Text>
              <Text
                testID="referral-form-description"
                className="text-lg text-gray-600"
              >
                Clinicians are able to make referrals via:
              </Text>
            </div>

            <div className="space-y-8">
              {/* Download Section */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <Heading
                      testID="download-referral-form-title"
                      className="text-xl font-semibold text-blue-900 mb-2"
                    >
                      Download Referral Form
                    </Heading>
                    <Text
                      testID="download-referral-form-description"
                      className="text-blue-700"
                    >
                      Download our referral form as a PDF to complete offline or
                      print
                    </Text>
                  </div>
                  <a
                    data-testid="download-referral-form-button"
                    href={REFERRAL_FORM_PATH}
                    download={REFERRAL_FORM_DOWNLOAD_NAME}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block text-center no-underline"
                  >
                    Download PDF
                  </a>
                </div>
              </div>

              {/* Referral Methods */}
              <div className="space-y-6">
                <div className="grid gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        1
                      </div>
                      <div>
                        <Heading
                          testID="medical-objects-title"
                          className="font-semibold text-gray-900 mb-2"
                        >
                          Specialist Referral Letter via Medical Objects
                        </Heading>
                        <Text
                          testID="medical-objects-description"
                          className="text-gray-600"
                        >
                          Send your referral letter through the Medical Objects
                          platform for secure electronic transmission.
                        </Text>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        2
                      </div>
                      <div>
                        <Heading
                          testID="medical-director-title"
                          className="font-semibold text-gray-900 mb-2"
                        >
                          Specialist Referral Letter via Medical Director or
                          Best Practice
                        </Heading>
                        <Text
                          testID="medical-director-description"
                          className="text-gray-600"
                        >
                          Submit your referral letter through Medical Director
                          or Best Practice practice management systems.
                        </Text>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                        3
                      </div>
                      <div>
                        <Heading
                          testID="referral-form-title-option"
                          className="font-semibold text-gray-900 mb-2"
                        >
                          Using the Referral Form below
                        </Heading>
                        <Text
                          testID="referral-form-description-option"
                          className="text-gray-600"
                        >
                          Download and complete our PDF referral form, then
                          submit it according to the instructions provided.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer testID="footer" />
    </div>
  );
}
