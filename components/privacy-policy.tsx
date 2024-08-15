import Link from "next/link";
import { CONTACT_EMAIL } from "@/utils/constants";

export default function PrivacyPolicyComponent() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="relative pb-10 pt-32 md:pb-16 md:pt-40">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-left text-gray-800 md:pb-16">
            <h1
              className="mb-24 text-6xl font-medium text-gray-900"
              data-aos="fade-up"
            >
              Privacy Policy
            </h1>

            <h2 className="mb-7 mt-14 text-3xl font-medium text-gray-900">
              Introduction
            </h2>
            <div className="text-base font-normal">
              <p>
                This privacy policy (“Privacy Policy”) applies to all visitors
                and users of the PearAI desktop app and websites (collectively,
                “PearAI”, “App” or “Apps”), which are offered by PearAI Inc.
                and/or any of its affiliates (“Anysphere” or “we” or “us”) and
                describes how we process your personal information in connection
                with those Apps, and how we collect information through the use
                of cookies and related technologies. It also tells you how you
                can access and update your personal information and describes
                the data protection rights that may be available under your
                country&apos;s or state&apos;s laws. Please read this Privacy
                Policy carefully. By accessing or using any part of the App, you
                acknowledge you have been informed of and consent to our
                practices with regard to your personal information and data.
              </p>
            </div>

            <h2 className="mb-7 mt-14 text-3xl font-medium text-gray-900">
              Applicability of this Privacy Policy
            </h2>
            <div className="space-y-4 text-base font-normal">
              <p>
                If you are a customer of PearAI, this Privacy Policy does not
                apply to personal information or other data and information that
                we process on your behalf (if any) as your service provider
                (collectively, “Customer Data”). We will only use Customer Data
                (including any personal information contained therein) to
                provide you with the Services, and our use of your Customer Data
                shall instead be governed by the terms and conditions of the
                separate customer agreement or terms of service that you have
                agreed to with us.
              </p>
              <p>
                If you are using the Services as an employee, contractor or
                other representative of one of our customers and you have any
                questions about our privacy practices or would like to exercise
                any rights with respect to your personal information that we
                process on behalf of our customers, please contact the
                corresponding customer as we only process your personal
                information in our capacity as a service provider to our
                customer.
              </p>
            </div>

            <h2 className="mb-7 mt-14 text-3xl font-medium text-gray-900">
              Personal information we collect
            </h2>
            <div className="space-y-4 text-base font-normal">
              <p>
                You may choose to interact with our Apps in ways that provide us
                with your personal information. In some instances, a User ID is
                generated for form and URL tracking, page views, page pings and
                usage counts in order to ascertain product performance and
                development. The amount and type of information that PearAI
                gathers depends on the nature of your interaction with us, as
                well as the amount of information you choose to share. For
                example, we ask visitors who use our community Discord, or our
                forum, to provide a username and email address. We will also
                collect the information you provide with us in connection with
                creating an account on the App. In each case, PearAI collects
                such personal information only insofar as is necessary or
                appropriate to fulfill the purpose of your interaction with or
                your request to PearAI. We will not disclose your personal
                information other than as described in this Privacy Policy.
              </p>
              <p>
                Like most website operators, PearAI automatically collects (i)
                technical information about your device including your
                device&apos;s internet protocol (IP) address, device type (e.g.,
                phone, tablet), unique identifiers (including identifiers used
                for advertising purposes), language settings, mobile device
                carrier, radio/network information (e.g., WiFi, LTE, 4G), and
                general location information such as city, state or geographic
                area; and (ii) information about your visit to our Apps and
                online activity data (such as the referral URL, the content
                viewed and the content interacted with). Some of this
                information is collected using cookies, web beacons and related
                local storage technologies. See below for further information on
                these technologies. We collect this information to better
                understand how visitors use our Apps, to improve our Apps and
                experience for visitors, and to monitor the security of the
                Apps.
              </p>
              <p>
                We may aggregate all information (including your personal
                information) collected from our Apps for our own statistical and
                analytics purposes and share such aggregated information with
                third parties for our own promotional purposes (e.g. by
                publishing a report on trends in the usage of our Apps).
              </p>
            </div>

            <h2 className="mb-7 mt-14 text-3xl font-medium text-gray-900">
              Information PearAI does not collect
            </h2>
            <div className="space-y-4 text-base font-normal">
              <p>
                PearAI does not intentionally collect sensitive or special
                category personal information, such as genetic data, biometric
                data for the purposes of uniquely identifying a natural person,
                health information, or religious information.
              </p>
              <p>
                PearAI does not knowingly collect information from or direct any
                of our App or content specifically to children under the age of
                18. If we learn or have reason to suspect that a user is under
                the age of 18, we will close that account.
              </p>
            </div>

            <h2 className="mb-7 mt-14 text-3xl font-medium text-gray-900">
              Lawful basis and purposes for processing your personal information
            </h2>
            <div className="thin-bullets space-y-4 text-base font-normal">
              <p>
                If you are an individual in the United Kingdom or European
                Economic Area (EEA), we collect and process information about
                you only where we have legal bases for doing so under applicable
                United Kingdom and/or EU laws. The legal bases depend on the
                Services you use and how you use them. This means we collect and
                use your information only where:
              </p>
              <p>
                <strong>
                  To fulfil a contract or take steps linked to a contract with
                  you
                </strong>
              </p>
              <p>We use your personal information to:</p>
              <ul className="list-disc space-y-2 pl-8">
                <li>administer access to your accounts;</li>
                <li>manage our customer relationships;</li>
                <li>
                  process orders, provide our products and services and send you
                  service related communications;
                </li>
                <li>provide you with customer support.</li>
              </ul>
              <p>
                <strong>Legitimate interests</strong>
              </p>
              <p>We use your personal information:</p>
              <ul className="list-disc space-y-2 pl-8">
                <li>
                  to improve and personalize your experience with us and our
                  Apps and to tailor communications to you;
                </li>
                <li>
                  to understand how you use our Apps and to develop new
                  products, services, features, and functionality;
                </li>
                <li>
                  to monitor and improve the performance of our products and
                  services for administrative, security and fraud prevention
                  purposes;
                </li>
                <li>
                  for our own internal functions, management and corporate
                  reporting, and internal research and analytics;
                </li>
                <li>
                  enforce compliance with our terms of use and other policies or
                  otherwise in connection with legal claims, compliance,
                  regulatory and investigatory purposes as necessary (including
                  disclosure of such information in connection with legal
                  process or litigation);
                </li>
                <li>
                  to fulfill payments and transactions; to provide information
                  about our Services;
                </li>
                <li>to respond to your requests, questions and feedback;</li>
                <li>
                  to for marketing and advertising purposes as we may from
                  time-to-time send you direct marketing emails as permitted by
                  law, including, but not limited to, notifying you of special
                  promotions, offers and events; and
                </li>
                <li>
                  to comply with applicable laws, lawful requests, and legal
                  process, such as to respond to subpoenas or requests from
                  government authorities.
                </li>
              </ul>
              <p>
                <strong>Consent </strong>
              </p>
              <p>We may rely on your consent:</p>
              <ul className="list-disc space-y-2 pl-8">
                <li>
                  where you have expressly indicated to us your consent to the
                  processing of your personal information (e.g. where you
                  consent to receive marketing communications from us);
                </li>
                <li>
                  where we have obtained your consent to place cookies or
                  similar technologies; and
                </li>
                <li>
                  on other occasions where we ask for your consent, for the
                  purpose we explain at the time.
                </li>
              </ul>
              <p>
                You may withdraw your consent at any time through the
                unsubscribe feature provided with the relevant marketing email
                or by contacting us using the details in the &apos;Contacting
                PearAI About Your Privacy&apos; section of this Privacy Policy.
              </p>
            </div>

            <h2 className="mb-7 mt-14 text-3xl font-medium text-gray-900">
              How PearAI uses and protects your personal information
            </h2>
            <div className="thin-bullets space-y-4 text-base font-normal">
              <p>
                <strong>Sharing your information</strong>
              </p>
              <p>
                PearAI may share your personal information with the
                third-parties listed below for the purposes that are described
                in this Privacy Policy or otherwise with your consent.
              </p>
              <p>
                PearAI only shares your personal information with those of its
                employees, contractors, and affiliated organizations that (i)
                need to know that personal information in order to process it on
                PearAI&apos;s behalf or to provide services available on the
                App, and (ii) that have agreed not to disclose it to others.
              </p>
              <p>
                PearAI may disclose your personal information to professional
                advisors, such as lawyers, bankers, auditors and insurers, where
                necessary in the course of the professional services that they
                render to us.
              </p>
              <p>
                PearAI may sell, transfer or otherwise share some or all of our
                business or assets, including your personal information, in
                connection with a business transaction (or potential business
                transaction) such as a corporate divestiture, merger,
                consolidation, acquisition, reorganization or sale of assets, or
                in the event of bankruptcy or dissolution. In such a case, we
                will make reasonable efforts to require the recipient to honor
                this Privacy Policy.
              </p>
              <p>
                <strong>Service Providers and partners. </strong>
                PearAI engages a number of service providers or partners to
                manage or support certain aspects of our business operations on
                our behalf. For instance, we currently use the following service
                providers who will handle your personal information:
              </p>
              <ul className="list-disc space-y-2 pl-8">
                <li>AWS - cloud data hosting</li>
                <li>
                  GitHub - open source repositories and internal project
                  management tool
                </li>
                <li>Datadog - application monitoring and error tracking</li>
                <li>Slack - internal communications tool</li>
                <li>Amplitude - analytics</li>
                <li>Google Workspace - internal collaboration tools</li>
                <li>Stripe - payment processing</li>
              </ul>
              <p>
                Our service providers and partners are required by contract to
                safeguard any personal information they receive from us and are
                prohibited from using the personal information for any purpose
                other than to perform the services as instructed by PearAI.
              </p>
              <p>
                <strong>Legal Requirements. </strong>
                We may disclose personal information to government authorities
                or other third-parties if required to do so by law or in the
                good faith belief that such action is necessary to: (a) comply
                with a subpoena, court order or similar legal obligation, (b)
                protect and defend our rights or property, (c) act in urgent
                circumstances to protect the personal safety of users of any App
                or the public, (d) protect against legal liability, (e) to
                investigate fraud or other unlawful activity, or (f) or as
                otherwise required or permitted by law.
              </p>
              <p>
                PearAI takes measures reasonably necessary to protect your
                personal information against any unauthorized access, use,
                alteration, or destruction.
              </p>
            </div>

            <h2 className="mb-7 mt-14 text-3xl font-medium text-gray-900">
              Cross-border transfer of personal information
            </h2>
            <div className="space-y-4 text-base font-normal">
              <p>
                The Apps are hosted in the United States and the personal
                information we collect will be stored and processed on our
                servers in the United States. Our employees, contractors and
                affiliated organizations that process information for us as
                described above may be located in the United States or in other
                countries outside of your home country which may have different
                data protection standards to those which apply in your home
                country.
              </p>
              <p>
                Where your personal information is transferred outside of the
                EEA, Switzerland and UK and where this is to a country which is
                not subject to an adequacy decision by the EU Commission or
                considered adequate as determined by applicable data protection
                laws, we will take steps to ensure your personal information is
                adequately protected by safeguards such as Standard Contractual
                Clauses (“SCCs”) approved by the EU Commission or by the UK
                Government. A copy of the relevant mechanism can be obtained for
                your review on request by using the contact details in the
                &apos;Contacting PearAI About Your Privacy&apos; section of this
                Privacy Policy.
              </p>
            </div>

            <h2 className="mb-7 mt-14 text-3xl font-medium text-gray-900">
              PearAI communications with you
            </h2>
            <div className="space-y-4 text-base font-normal">
              <p>
                If you are a registered user of the Apps and have supplied your
                email address, PearAI may occasionally send you an email to tell
                you about security, system information, new features, solicit
                your feedback, or just keep you up to date with what&apos;s
                going on with PearAI and our products. We primarily use our blog
                to communicate this type of information, so we expect to keep
                this type of email to a minimum. There&apos;s an unsubscribe
                link located at the bottom of each of the marketing emails we
                send you so you can stop receiving such emails at any time.
              </p>
              <p>
                If you send us a request (for example via a support email or via
                one of our feedback mechanisms), we reserve the right to publish
                your request in order to help us clarify or respond to your
                request or to help us support other users. We will not publish
                your personal information in connection with your request.
              </p>
            </div>

            <h2 className="mb-7 mt-14 text-3xl font-medium text-gray-900">
              Your choices
            </h2>
            <div className="thin-bullets space-y-4 text-base font-normal">
              <p>
                In this section, we describe the rights and choices available to
                all users.
              </p>
              <p>
                <strong>Opt out of marketing communications. </strong>
                You may opt out of marketing-related communications by following
                the opt-out or unsubscribe instructions within the marketing
                communication we send you.
              </p>
              <p>
                <strong>Cookies. </strong>
                Most browser settings let you delete and reject cookies placed
                by websites. Many browsers accept cookies by default until you
                change your settings. If you do not accept cookies, you may not
                be able to use all functionality of the website and it may not
                work properly. For more information about cookies, including how
                to see what cookies have been set on your browser and how to
                manage and delete them, visit www.allaboutcookies.org.
              </p>
              <p>
                <strong>Online tracking opt-out. </strong>
                There are a number of ways to opt out of having your online
                activity and device data collected through our website, which we
                have summarized below:
              </p>
              <ul className="list-disc space-y-2 pl-8">
                <li>
                  Blocking cookies in your browser. Most browsers let you remove
                  or reject cookies, including cookies used for interest-based
                  advertising. To do this, follow the instructions in your
                  browser settings. Many browsers accept cookies by default
                  until you change your settings. For more information about
                  cookies, including how to see what cookies have been set on
                  your device and how to manage and delete them, visit
                  allaboutcookies.org.
                </li>
                <p>
                  Use the following links to learn more about how to control
                  cookies and online tracking through your browser:
                </p>
                <ul className="list-disc space-y-2 pl-8 font-medium text-gray-900">
                  <li>
                    <Link
                      href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                      className="underline"
                    >
                      Firefox
                    </Link>
                    ;{" "}
                    <Link
                      href="https://support.google.com/chrome/answer/95647"
                      className="underline"
                    >
                      Chrome
                    </Link>
                    ;{" "}
                    <Link
                      href="https://support.microsoft.com/en-us/microsoft-edge/learn-about-tracking-prevention-in-microsoft-edge-5ac125e8-9b90-8d59-fa2c-7f2e9a44d869"
                      className="underline"
                    >
                      Microsoft Edge
                    </Link>
                    ;{" "}
                    <Link
                      href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                      className="underline"
                    >
                      Safari
                    </Link>
                  </li>
                </ul>
                <li>
                  Blocking advertising ID use in your mobile settings. Your
                  mobile device settings may provide functionality to limit use
                  of the advertising ID associated with your mobile device for
                  interest-based advertising purposes.
                </li>
                <li>
                  Google Analytics. We use Google Analytics to help us better
                  understand how people engage with our Services by collecting
                  information and creating reports about how users use our
                  Services. For more information on Google Analytics, click{" "}
                  <Link
                    href="https://marketingplatform.google.com/about/analytics/"
                    className="font-medium text-gray-900 underline"
                  >
                    here
                  </Link>
                  . For more information about Google&apos;s privacy practices,
                  click{" "}
                  <Link
                    href="https://www.google.com/policies/privacy/partners/"
                    className="font-medium text-gray-900 underline"
                  >
                    here
                  </Link>
                  . You can opt out of Google Analytics by downloading and
                  installing the browser plug-in available at:
                  <Link
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="font-medium text-gray-900 underline"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </Link>
                </li>
                <li>
                  Using privacy plug-ins or browsers. You can block our Services
                  from setting cookies used for interest-based ads by using a
                  browser with privacy features, like{" "}
                  <Link
                    href="https://brave.com/"
                    className="font-medium text-gray-900 underline"
                  >
                    Brave
                  </Link>
                  , or installing browser plugins like{" "}
                  <Link
                    href="https://www.eff.org/privacybadger"
                    className="font-medium text-gray-900 underline"
                  >
                    Privacy Badger
                  </Link>
                  ,{" "}
                  <Link
                    href="https://duckduckgo.com/"
                    className="font-medium text-gray-900 underline"
                  >
                    DuckDuckGo
                  </Link>
                  ,{" "}
                  <Link
                    href="https://ghostery.com/"
                    className="font-medium text-gray-900 underline"
                  >
                    Ghostery
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="https://ublock.org/"
                    className="font-medium text-gray-900 underline"
                  >
                    uBlock Origin
                  </Link>
                  , and configuring them to block third party cookies/trackers.
                </li>
                <li>
                  Platform opt-outs. Some third-party ad networks, including
                  third-party ad servers, ad agencies, ad technology vendors and
                  research firms, allow you to opt-out directly by using their
                  opt-out tools. Some of these providers, and links to their
                  opt-out tools, are:
                </li>
                <ul className="list-disc space-y-2 pl-8">
                  <li>
                    <Link
                      href="https://adssettings.google.com/"
                      className="font-medium text-gray-900 underline"
                    >
                      Google
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/about/ads/"
                      className="font-medium text-gray-900 underline"
                    >
                      Facebook
                    </Link>
                  </li>
                </ul>
                <li>
                  <strong>Advertising industry opt-out tools. </strong>
                  You can also use these opt-out options to limit use of your
                  information for interest-based advertising by participating
                  companies:
                </li>
                <ul className="list-disc space-y-2 pl-8">
                  <li>
                    <Link
                      href="https://optout.aboutads.info/"
                      className="font-medium text-gray-900 underline"
                    >
                      Digital Advertising Alliance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://optout.networkadvertising.org/?c=1"
                      className="font-medium text-gray-900 underline"
                    >
                      Network Advertising Initiative
                    </Link>
                  </li>
                </ul>
              </ul>
              <p>
                <strong>Do Not Track. </strong>
                Some Internet browsers may be configured to send “Do Not Track”
                signals to the online services that you visit. We currently do
                not respond to “Do Not Track” or similar signals. To find out
                more about “Do Not Track,” please visit
                http://www.allaboutdnt.com.
              </p>
            </div>

            <h2 className="mb-7 mt-14 text-3xl font-medium text-gray-900">
              Global privacy practices and your rights
            </h2>
            <div className="thin-bullets space-y-4 text-base font-normal">
              <p>
                Information we collect may be stored and processed in the United
                States in accordance with this Privacy Policy but we understand
                that users from other countries may have different expectations
                and rights with regard to their privacy. For all App visitors
                and users, no matter their country of location, we will:
              </p>
              <ul className="list-disc space-y-2 pl-8">
                <li>
                  provide clear methods of unambiguous, informed consent when we
                  do collect your personal information and where required by
                  applicable law;
                </li>
                <li>
                  only collect the minimum amount of personal information
                  necessary for the purpose it is collected for, unless you
                  choose to provide us more;
                </li>
                <li>
                  offer you simple methods of accessing, correcting, or deleting
                  your information that we have collected, with the exception of
                  information you voluntarily provide that is necessary to
                  retain as is for the integrity of our project code as
                  described further below; and
                </li>
                <li>
                  provide App users notice, choice, accountability, security,
                  and access, and we limit the purpose for processing. We also
                  provide our users a method of recourse and enforcement.
                </li>
              </ul>
              <p>
                Additional rights that may apply to you in certain instances:
              </p>
              <ul className="list-disc space-y-2 pl-8">
                <li>
                  Right of data portability (if our processing is based on
                  consent or a contract and the processing carried out by
                  automated means);
                </li>
                <li>
                  Right to withdraw consent at any time (if processing is based
                  on consent). If you ask to withdraw your consent, this will
                  not affect any processing which has already taken place at
                  that time.
                </li>
                <li>
                  Right to object to processing (if processing is based on
                  legitimate interests)
                </li>
                <li>
                  Right to object to processing of personal data for direct
                  marketing purposes
                </li>
                <li>
                  Right of erasure of your personal data from our system (“right
                  to be forgotten”) if certain grounds are met
                </li>
              </ul>
              <p>
                These rights may be limited, for example if fulfilling your
                request would reveal personal information about another person,
                or if you ask us to delete information which we are required by
                law or have compelling legitimate interests to keep.
              </p>
              <p>
                Where we collect personal information to administer your
                accounts or your contract with us or to comply with our legal
                obligations, this is mandatory and we will not be able to manage
                our relationship with you without this. In all other cases, the
                provision of requested personal information is optional, but
                this may affect your ability to participate in certain
                App-related activities or being able to access and use certain
                features and services, where the information is needed for those
                purposes.
              </p>
              <p>
                To exercise your privacy rights, you can email us at the address
                given below in the &apos;Contacting PearAI About Your
                Privacy&apos; section of this Privacy Policy.
              </p>
            </div>

            <h2 className="mb-7 mt-14 text-3xl font-medium text-gray-900">
              Data retention and deletion
            </h2>
            <div className="space-y-4 text-base font-normal">
              <p>
                If you already have an account on the Apps, you may access,
                update, alter, or delete your basic user profile information by
                logging into your account and updating profile settings.
              </p>
              <p>
                PearAI will retain your information for as long as your account
                is active or as needed to perform our contractual obligations,
                provide you services through the App, to comply with legal
                obligations, resolve disputes, preserve legal rights, or enforce
                our agreements. Retention periods will be determined taking into
                account the type of information that is collected and the
                purpose for which it is collected, bearing in mind the
                requirements applicable to the situation and the need to destroy
                outdated, unused information at the earliest reasonable
                opportunity. For instance, in respect of data held for the
                management of customers and potential customers, we consider the
                lead time necessary to develop and maintain our commercial
                relationships and how recent our interactions are with you. We
                may rectify, update or remove incomplete or inaccurate
                information, at any time and at our own discretion. For more
                information on our retention periods you can contact us using
                the details in the &apos;Contacting PearAI About Your
                Privacy&apos; section of this Privacy Policy.
              </p>
              <p>
                Please note that due to the open source nature of our products,
                services, and community, we may retain limited personal
                information indefinitely in order to ensure transactional
                integrity and nonrepudiation. For example, if you provide your
                information in connection with a blog post, GitHub issue or
                comment, we may display that information even if you have
                deleted your account as we do not automatically delete community
                posts.
              </p>
            </div>

            <h2 className="mb-7 mt-14 text-3xl font-medium text-gray-900">
              Contacting PearAI About Your Privacy
            </h2>
            <div className="space-y-4 text-base font-normal">
              <p>
                The relevant data controller for any personal information
                processed in connection with our Apps is PearAI Inc.
              </p>
              <p>
                If you have any questions about this Privacy Policy or our
                privacy and security practices or you wish to make a complaint
                about our compliance with applicable privacy laws, please feel
                free to contact us at{" "}
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-gray-900 underline"
                >
                  {CONTACT_EMAIL}
                </Link>
                .
              </p>
              <p>
                If you have questions or concerns about the way we are handling
                your personal information, or would like to exercise your
                privacy rights, please email us with the subject line
                &quot;Privacy Concern&quot; at{" "}
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-gray-900 underline"
                >
                  {CONTACT_EMAIL}
                </Link>
                .
              </p>
              <p>
                In most cases, we will respond within 30 days of receiving your
                message but please note for promptest response, we recommend
                emailing us.
              </p>
            </div>

            <h2 className="mb-7 mt-14 text-3xl font-medium text-gray-900">
              Privacy policy changes
            </h2>
            <div className="space-y-4 text-base font-normal">
              <p>
                PearAI may change its privacy policy from time to time, and in
                PearAI&apos;s sole discretion.
              </p>
              <p>
                If we make material changes to this Privacy Policy, we will
                notify you by updating the date of this Privacy Policy . Your
                continued use of this site after any change in this Privacy
                Policy will constitute your acceptance of such change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
