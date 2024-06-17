export default function PrivacyPolicyComponent() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Illustration behind hero content */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 -ml-20 hidden lg:block"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <svg
            className="max-w-full"
            width="564"
            height="552"
            viewBox="0 0 564 552"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="illustration-02"
                x1="-3.766"
                y1="300.204"
                x2="284.352"
                y2="577.921"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5D5DFF" stopOpacity=".01" />
                <stop offset="1" stopColor="#5D5DFF" stopOpacity=".32" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M151.631 22.954c19.025-13.987 40.754-20.902 67.157-20.902 18.865 0 40.12 3.534 64.461 10.542 15.855 4.566 30.274 8.448 43.282 11.908-3.117-.73-6.316-1.474-9.604-2.238-13.789-3.205-29.419-6.84-46.941-11.331C153.37-18.963 125.867 40.456 75.939 148.322l-.003.006a7576.221 7576.221 0 01-7.711 16.624c-29.474 63.279-43.616 99.759-44.264 135.927-.659 36.738 12.251 72.311 47.633 131.253 35.391 58.957 60.19 86.192 91.501 100.484.962.439 1.93.865 2.905 1.279-9.73-2.472-18.561-5.625-26.916-9.633-32.753-15.71-57.88-43.982-92.714-104.315-34.834-60.333-46.755-96.23-43.984-132.449 2.732-35.713 20.082-71.213 55.526-132.603a7349.326 7349.326 0 009.317-16.2l.004-.007c29.787-51.892 53.315-92.88 84.398-115.734zm34.507 514.934a241.712 241.712 0 01-5.151-.83c-5.964-1.702-11.607-3.772-17.062-6.262-30.898-14.104-55.459-41.124-90.616-99.693-35.167-58.584-48-93.868-47.349-130.187.642-35.809 14.725-72.101 44.078-135.12 2.513-5.395 4.96-10.683 7.356-15.857l.357-.771.002-.005c24.651-53.256 44.122-95.32 71.478-119.633 18.318-16.282 40.065-24.26 67.588-24.26 15.567 0 32.985 2.554 52.67 7.6 14.706 3.77 28.076 6.935 40.144 9.75-2.797-.558-5.665-1.125-8.609-1.707h-.003l-.003-.001-.053-.01h-.001c-12.823-2.535-27.354-5.407-43.664-9.044C148.495-12.404 126.33 48.27 86.092 158.42l-.004.011-.016.042a8434.991 8434.991 0 01-6.201 16.936c-23.765 64.604-34.847 101.709-33.55 137.844C47.638 349.957 61.359 384.852 96.945 442c35.541 57.077 59.736 83.093 89.193 95.888zm16.598 2.005a338.416 338.416 0 01-8.148-.869 103.656 103.656 0 01-7.5-2.904c-28.737-12.428-53.535-39.114-88.445-95.176-35.381-56.82-49.02-91.447-50.323-127.762-1.285-35.802 9.756-72.729 33.428-137.083 1.94-5.276 3.831-10.449 5.683-15.517l.007-.017.007-.021.522-1.427c19.862-54.372 35.55-97.317 59.408-122.911C172.358 9.403 206.126 2.494 256.864 13.81c13.649 3.043 26.048 5.55 37.243 7.773-2.531-.411-5.124-.828-7.785-1.255l-.071-.011h-.003c-11.906-1.914-25.397-4.082-40.56-6.926C144.349-5.618 127.156 56.06 95.945 168.03l-.003.009a8355.73 8355.73 0 01-4.821 17.248c-18.45 65.652-26.689 103.234-23.608 139.244 3.09 36.109 18.017 71.465 53.24 126.105 33.482 51.938 56.333 76.988 81.983 89.257zm15.827 1.2a485.788 485.788 0 01-9.653-.664l-.264-.107c-27.037-11.022-51.209-36.471-86.212-90.77-35.484-55.044-49.829-88.975-52.928-125.19-3.055-35.705 5.157-73.119 23.541-138.534a8620.925 8620.925 0 004.497-16.087l.325-1.165.002-.006c15.402-55.255 27.568-98.9 48.147-125.608 16.123-20.925 37.347-30.952 66.801-30.952 9.869 0 20.667 1.127 32.5 3.347 12.636 2.37 24.106 4.27 34.467 5.944-2.277-.28-4.608-.562-6.997-.85h-.001l-.001-.001h-.001c-11.054-1.338-23.584-2.855-37.688-4.97-94.204-14.122-106.775 48.314-129.594 161.65l-.003.014-.047.235-.002.008a8400.92 8400.92 0 01-3.479 17.22c-13.513 66.44-19.115 104.361-14.4 140.163 4.727 35.898 20.289 70.48 55.506 123.345 31.385 47.111 52.956 71.08 75.484 82.978zm15.539.719a709.825 709.825 0 01-10.437-.441c-23.548-10.908-46.233-35.298-78.922-84.366-35.486-53.268-50.443-86.468-55.187-122.497-3.728-28.301-2.526-56.394 14.377-139.503 1.21-5.95 2.383-11.773 3.529-17.466 11.26-55.927 20.154-100.102 37.666-127.768 18.294-28.901 45.951-38.863 89.673-32.313 11.708 1.755 22.326 3.099 31.917 4.27-2.072-.167-4.193-.334-6.366-.505h-.002l-.018-.002c-10.221-.803-21.804-1.714-34.864-3.146-87.388-9.576-95.67 53.388-110.705 167.692l-.002.014-.047.36c-.74 5.623-1.496 11.372-2.28 17.244-8.937 66.993-12.098 105.125-5.896 140.639 6.221 35.612 22.326 69.391 57.443 120.48 29.544 42.981 49.981 65.798 70.121 77.308zm54.655.656c-2.322.006-4.68.009-7.073.009-15.823 0-30.079-.135-43.037-.519-20.923-10.699-42.32-33.928-73.018-78.587-35.393-51.49-50.874-83.93-57.12-119.691-4.907-28.091-5.274-56.21 5.907-140.03.786-5.887 1.544-11.65 2.286-17.287v-.001l.042-.32c7.418-56.4 13.278-100.948 27.923-129.427 13.148-25.57 33.385-37.482 64.556-37.482 5.049 0 10.388.312 16.027.93 13.049 1.43 24.617 2.341 34.829 3.145h.001l.114.009h.001c59.526 4.682 79.579 6.26 136.926 89.687 36.003 52.377 54.831 83.312 64.453 117.449 9.765 34.64 10.139 71.93 1.38 137.589-8.64 64.766-18.645 98.41-35.683 119.994-16.965 21.491-41.268 32.104-86.06 46.46-1.661.532-3.296 1.052-4.905 1.56a1391.5 1391.5 0 01-10.245 2.482 1345.267 1345.267 0 01-11.347 1.958 1812.762 1812.762 0 01-12.481 1.367 2129.386 2129.386 0 01-13.476.705zm27.18 1.709c50.448-1.039 82.218-5.164 109.211-18.112 33.159-15.904 58.522-44.394 93.581-105.118 35.06-60.724 47.051-96.934 44.246-133.603-2.762-36.096-20.19-71.792-55.788-133.449-56.949-98.64-86.21-106.404-173.068-129.448l-.056-.014c-14.774-3.92-31.516-8.363-50.261-13.76C159.031-25.254 125.808 32.624 65.497 137.694l-.002.003a6915.634 6915.634 0 01-9.316 16.197C20.581 215.552 3.154 251.247.392 287.344c-2.806 36.669 9.186 72.879 44.245 133.603 35.06 60.724 60.423 89.214 93.582 105.118 12.593 6.04 26.224 10.16 42.307 12.943 6.906 1.966 14.23 3.443 22.172 4.508 6.442 1.628 13.241 2.748 20.583 3.429 5.999 1.314 12.297 2.105 19.071 2.433 5.603 1.028 11.455 1.517 17.722 1.517l.314-.001c3.67.505 7.416.742 11.25.742 13.466 0 28.027-2.926 44.299-7.459zm18.196-2.551c42.427-3.518 69.755-9.295 92.704-22.832 29.646-17.487 51.462-47.164 80.495-109.498 29.027-62.318 38.148-99.046 33.653-135.513-4.425-35.901-22.303-70.703-58.23-130.556-39.939-66.535-65.307-89.912-104.239-104.3 53.844 16.863 81.528 37.31 126.939 115.968 35.443 61.39 52.793 96.891 55.525 132.603 2.772 36.219-9.149 72.116-43.983 132.449-34.834 60.333-59.962 88.605-92.714 104.315-23.296 11.175-50.3 15.706-90.15 17.364zm93.883-30.185c-20.416 14.652-45.267 21.74-84.153 27.302 36.558-3.571 61.14-9.392 81.957-21.671 29.256-17.257 50.857-46.697 79.7-108.619 28.849-61.94 37.924-98.373 33.479-134.425-4.381-35.543-22.179-70.166-57.959-129.772-45.707-76.146-72.185-95.334-122.253-109.565 36.374 12.515 60.888 34.697 100.963 99.056 36.138 58.035 54.382 91.924 60.326 127.553 6.035 36.185-.421 73.291-23.824 136.909-23.412 63.646-41.906 94.334-68.236 113.232zm-75.097 23.912c35.377-7.423 57.817-15.704 75.801-31.314 23.206-20.143 38.593-51.68 56.77-116.363 18.167-64.644 22.158-101.999 14.722-137.83-7.323-35.285-25.856-68.245-62.092-124.454-40.109-62.219-63.784-83.239-97.755-94.01 46.513 11.797 71.824 29.769 117.688 103.423 35.995 57.806 54.162 91.528 60.05 126.824 5.972 35.804-.459 72.634-23.728 135.889-22.96 62.416-41.892 93.9-67.525 112.298-18.433 13.228-40.651 20.217-73.931 25.537zm76.065-38.742c-16.398 17.18-38.639 26.625-66.953 34.691 29.631-6.852 49.359-14.869 65.378-28.773 22.583-19.603 38.327-51.956 56.156-115.394 18.071-64.301 22.052-101.4 14.688-136.882-7.258-34.975-25.716-67.78-61.814-123.777-45.857-71.136-70.036-87.963-113.146-97.515 31.663 9.156 54.508 29.065 94.518 89.127 36.23 54.385 54.981 86.404 63.553 121.278 8.703 35.411 6.992 72.898-6.313 138.315-13.314 65.463-25.8 97.696-46.067 118.93zm-59.762 30.414c25.551-9.413 45.464-19.917 59.62-37.85 17.506-22.178 27.29-54.964 36.094-120.97 8.799-65.956 8.41-103.465-1.437-138.395-4.847-17.196-12.323-34.408-23.53-54.17-10.572-18.643-24.116-39.015-41.2-63.869-39.854-57.98-61.888-76.799-91.408-84.443 39.946 7.477 63.031 23.183 108.786 91.868 36.098 54.188 54.774 86.063 63.275 120.648 8.626 35.092 6.91 72.342-6.33 137.439-13.062 64.216-25.834 97.286-45.555 117.947-13.941 14.607-31.58 23.548-58.315 31.795z"
              fill="url(#illustration-02)"
            />
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative pb-10 pt-32 md:pb-16 md:pt-40">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-left md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Privacy Policy
            </h1>
            <h2 className="h2 my-4">Introduction</h2>
            This privacy policy (“Privacy Policy”) applies to all visitors and
            users of the PearAI desktop app and websites (collectively, PearAI,”
            “App” or “Apps”), which are offered by PearAI Inc. and/or any of its
            affiliates (“Anysphere” or “we” or “us”) and describes how we
            process your personal information in connection with those Apps, and
            how we collect information through the use of cookies and related
            technologies. It also tells you how you can access and update your
            personal information and describes the data protection rights that
            may be available under your country&apos;s or state&apos;s laws.
            Please read this Privacy Policy carefully. By accessing or using any
            part of the App, you acknowledge you have been informed of and
            consent to our practices with regard to your personal information
            and data.
            <h2 className="h2 my-4">Applicability of this Privacy Policy</h2>
            If you are a customer of PearAI, this Privacy Policy does not apply
            to personal information or other data and information that we
            process on your behalf (if any) as your service provider
            (collectively, “Customer Data”). We will only use Customer Data
            (including any personal information contained therein) to provide
            you with the Services, and our use of your Customer Data shall
            instead be governed by the terms and conditions of the separate
            customer agreement or terms of service that you have agreed to with
            us. If you are using the Services as an employee, contractor or
            other representative of one of our customers and you have any
            questions about our privacy practices or would like to exercise any
            rights with respect to your personal information that we process on
            behalf of our customers, please contact the corresponding customer
            as we only process your personal information in our capacity as a
            service provider to our customer.
            <h2 className="h2 my-4">Personal information we collect</h2>
            You may choose to interact with our Apps in ways that provide us
            with your personal information. In some instances, a User ID is
            generated for form and URL tracking, page views, page pings and
            usage counts in order to ascertain product performance and
            development. The amount and type of information that PearAI gathers
            depends on the nature of your interaction with us, as well as the
            amount of information you choose to share. For example, we ask
            visitors who use our community Discord, or our forum, to provide a
            username and email address. We will also collect the information you
            provide with us in connection with creating an account on the App.
            In each case, PearAI collects such personal information only insofar
            as is necessary or appropriate to fulfill the purpose of your
            interaction with or your request to PearAI. We will not disclose
            your personal information other than as described in this Privacy
            Policy. Like most website operators, PearAI automatically collects
            (i) technical information about your device including your
            device&apos;s internet protocol (IP) address, device type (e.g.,
            phone, tablet), unique identifiers (including identifiers used for
            advertising purposes), language settings, mobile device carrier,
            radio/network information (e.g., WiFi, LTE, 4G), and general
            location information such as city, state or geographic area; and
            (ii) information about your visit to our Apps and online activity
            data (such as the referral URL, the content viewed and the content
            interacted with). Some of this information is collected using
            cookies, web beacons and related local storage technologies. See
            below for further information on these technologies. We collect this
            information to better understand how visitors use our Apps, to
            improve our Apps and experience for visitors, and to monitor the
            security of the Apps. We may aggregate all information (including
            your personal information) collected from our Apps for our own
            statistical and analytics purposes and share such aggregated
            information with third parties for our own promotional purposes
            (e.g. by publishing a report on trends in the usage of our Apps).
            <h2 className="h2 my-4">Information PearAI does not collect</h2>
            PearAI does not intentionally collect sensitive or special category
            personal information, such as genetic data, biometric data for the
            purposes of uniquely identifying a natural person, health
            information, or religious information. PearAI does not knowingly
            collect information from or direct any of our App or content
            specifically to children under the age of 18. If we learn or have
            reason to suspect that a user is under the age of 18, we will close
            that account.
            <h2 className="h2 my-4">
              Lawful basis and purposes for processing your personal information
            </h2>
            If you are an individual in the United Kingdom or European Economic
            Area (EEA), we collect and process information about you only where
            we have legal bases for doing so under applicable United Kingdom
            and/or EU laws. The legal bases depend on the Services you use and
            how you use them. This means we collect and use your information
            only where: To fulfil a contract or take steps linked to a contract
            with you We use your personal information to: administer access to
            your accounts; manage our customer relationships; process orders,
            provide our products and services and send you service related
            communications; and provide you with customer support. Legitimate
            interests We use your personal information: to improve and
            personalize your experience with us and our Apps and to tailor
            communications to you; to understand how you use our Apps and to
            develop new products, services, features, and functionality; to
            monitor and improve the performance of our products and services for
            administrative, security and fraud prevention purposes; for our own
            internal functions, management and corporate reporting, and internal
            research and analytics; to enforce compliance with our terms of use
            and other policies or otherwise in connection with legal claims,
            compliance, regulatory and investigatory purposes as necessary
            (including disclosure of such information in connection with legal
            process or litigation); to fulfill payments and transactions; to
            provide information about our Services; to respond to your requests,
            questions and feedback; for marketing and advertising purposes as we
            may from time-to-time send you direct marketing emails as permitted
            by law, including, but not limited to, notifying you of special
            promotions, offers and events; and to comply with applicable laws,
            lawful requests, and legal process, such as to respond to subpoenas
            or requests from government authorities. Consent We may rely on your
            consent: where you have expressly indicated to us your consent to
            the processing of your personal information (e.g. where you consent
            to receive marketing communications from us); where we have obtained
            your consent to place cookies or similar technologies; and on other
            occasions where we ask for your consent, for the purpose we explain
            at the time. You may withdraw your consent at any time through the
            unsubscribe feature provided with the relevant marketing email or by
            contacting us using the details in the &apos;Contacting PearAI About
            Your Privacy&apos; section of this Privacy Policy.
            <h2 className="h2 my-4">
              How PearAI uses and protects your personal information
            </h2>
            Sharing your information PearAI may share your personal information
            with the third-parties listed below for the purposes that are
            described in this Privacy Policy or otherwise with your consent.
            PearAI only shares your personal information with those of its
            employees, contractors, and affiliated organizations that (i) need
            to know that personal information in order to process it on
            PearAI&apos;s behalf or to provide services available on the App,
            and (ii) that have agreed not to disclose it to others. PearAI may
            disclose your personal information to professional advisors, such as
            lawyers, bankers, auditors and insurers, where necessary in the
            course of the professional services that they render to us. PearAI
            may sell, transfer or otherwise share some or all of our business or
            assets, including your personal information, in connection with a
            business transaction (or potential business transaction) such as a
            corporate divestiture, merger, consolidation, acquisition,
            reorganization or sale of assets, or in the event of bankruptcy or
            dissolution. In such a case, we will make reasonable efforts to
            require the recipient to honor this Privacy Policy. Service
            Providers and partners. PearAI engages a number of service providers
            or partners to manage or support certain aspects of our business
            operations on our behalf. For instance, we currently use the
            following service providers who will handle your personal
            information: AWS - cloud data hosting GitHub - open source
            repositories and internal project management tool Datadog -
            application monitoring and error tracking Slack - internal
            communications tool Amplitude - analytics Google Workspace -
            internal collaboration tools Our service providers and partners are
            required by contract to safeguard any personal information they
            receive from us and are prohibited from using the personal
            information for any purpose other than to perform the services as
            instructed by PearAI. Legal Requirements. We may disclose personal
            information to government authorities or other third-parties if
            required to do so by law or in the good faith belief that such
            action is necessary to: (a) comply with a subpoena, court order or
            similar legal obligation, (b) protect and defend our rights or
            property, (c) act in urgent circumstances to protect the personal
            safety of users of any App or the public, (d) protect against legal
            liability, (e) to investigate fraud or other unlawful activity, or
            (f) or as otherwise required or permitted by law. PearAI takes
            measures reasonably necessary to protect your personal information
            against any unauthorized access, use, alteration, or destruction.
            <h2 className="h2 my-4">
              Cross-border transfer of personal information
            </h2>
            The Apps are hosted in the United States and the personal
            information we collect will be stored and processed on our servers
            in the United States. Our employees, contractors and affiliated
            organizations that process information for us as described above may
            be located in the United States or in other countries outside of
            your home country which may have different data protection standards
            to those which apply in your home country. Where your personal
            information is transferred outside of the EEA, Switzerland and UK
            and where this is to a country which is not subject to an adequacy
            decision by the EU Commission or considered adequate as determined
            by applicable data protection laws, we will take steps to ensure
            your personal information is adequately protected by safeguards such
            as Standard Contractual Clauses (“SCCs”) approved by the EU
            Commission or by the UK Government. A copy of the relevant mechanism
            can be obtained for your review on request by using the contact
            details in the &apos;Contacting PearAI About Your Privacy&apos;
            section of this Privacy Policy.
            <h2 className="h2 my-4">PearAI communications with you</h2>
            If you are a registered user of the Apps and have supplied your
            email address, PearAI may occasionally send you an email to tell you
            about security, system information, new features, solicit your
            feedback, or just keep you up to date with what&apos;s going on with
            PearAI and our products. We primarily use our blog to communicate
            this type of information, so we expect to keep this type of email to
            a minimum. There&apos;s an unsubscribe link located at the bottom of
            each of the marketing emails we send you so you can stop receiving
            such emails at any time. If you send us a request (for example via a
            support email or via one of our feedback mechanisms), we reserve the
            right to publish your request in order to help us clarify or respond
            to your request or to help us support other users. We will not
            publish your personal information in connection with your request.
            <h2 className="h2 my-4">Your choices</h2>
            In this section, we describe the rights and choices available to all
            users. Opt out of marketing communications. You may opt out of
            marketing-related communications by following the opt-out or
            unsubscribe instructions within the marketing communication we send
            you. Cookies. Most browser settings let you delete and reject
            cookies placed by websites. Many browsers accept cookies by default
            until you change your settings. If you do not accept cookies, you
            may not be able to use all functionality of the website and it may
            not work properly. For more information about cookies, including how
            to see what cookies have been set on your browser and how to manage
            and delete them, visit www.allaboutcookies.org. Online tracking
            opt-out. There are a number of ways to opt out of having your online
            activity and device data collected through our website, which we
            have summarized below: Blocking cookies in your browser. Most
            browsers let you remove or reject cookies, including cookies used
            for interest-based advertising. To do this, follow the instructions
            in your browser settings. Many browsers accept cookies by default
            until you change your settings. For more information about cookies,
            including how to see what cookies have been set on your device and
            how to manage and delete them, visit allaboutcookies.org. Use the
            following links to learn more about how to control cookies and
            online tracking through your browser: Firefox; Chrome; Microsoft
            Edge; Safari Blocking advertising ID use in your mobile settings.
            Your mobile device settings may provide functionality to limit use
            of the advertising ID associated with your mobile device for
            interest-based advertising purposes. Google Analytics. We use Google
            Analytics to help us better understand how people engage with our
            Services by collecting information and creating reports about how
            users use our Services. For more information on Google Analytics,
            click here. For more information about Google&apos;s privacy
            practices, click here. You can opt out of Google Analytics by
            downloading and installing the browser plug-in available at:
            https://tools.google.com/dlpage/gaoptout. Using privacy plug-ins or
            browsers. You can block our Services from setting cookies used for
            interest-based ads by using a browser with privacy features, like
            Brave, or installing browser plugins like Privacy Badger,
            DuckDuckGo, Ghostery or uBlock Origin, and configuring them to block
            third party cookies/trackers. Platform opt-outs. Some third-party ad
            networks, including third-party ad servers, ad agencies, ad
            technology vendors and research firms, allow you to opt-out directly
            by using their opt-out tools. Some of these providers, and links to
            their opt-out tools, are: Google Facebook Advertising industry
            opt-out tools. You can also use these opt-out options to limit use
            of your information for interest-based advertising by participating
            companies: Digital Advertising Alliance Network Advertising
            Initiative Do Not Track. Some Internet browsers may be configured to
            send “Do Not Track” signals to the online services that you visit.
            We currently do not respond to “Do Not Track” or similar signals. To
            find out more about “Do Not Track,” please visit
            http://www.allaboutdnt.com.
            <h2 className="h2 my-4">
              Global privacy practices and your rights
            </h2>
            Information we collect may be stored and processed in the United
            States in accordance with this Privacy Policy but we understand that
            users from other countries may have different expectations and
            rights with regard to their privacy. For all App visitors and users,
            no matter their country of location, we will: provide clear methods
            of unambiguous, informed consent when we do collect your personal
            information and where required by applicable law; only collect the
            minimum amount of personal information necessary for the purpose it
            is collected for, unless you choose to provide us more; offer you
            simple methods of accessing, correcting, or deleting your
            information that we have collected, with the exception of
            information you voluntarily provide that is necessary to retain as
            is for the integrity of our project code as described further below;
            and provide App users notice, choice, accountability, security, and
            access, and we limit the purpose for processing. We also provide our
            users a method of recourse and enforcement. Additional rights that
            may apply to you in certain instances: Right of data portability (if
            our processing is based on consent or a contract and the processing
            carried out by automated means); Right to withdraw consent at any
            time (if processing is based on consent). If you ask to withdraw
            your consent, this will not affect any processing which has already
            taken place at that time. Right to object to processing (if
            processing is based on legitimate interests) Right to object to
            processing of personal data for direct marketing purposes Right of
            erasure of your personal data from our system (“right to be
            forgotten”) if certain grounds are met These rights may be limited,
            for example if fulfilling your request would reveal personal
            information about another person, or if you ask us to delete
            information which we are required by law or have compelling
            legitimate interests to keep. Where we collect personal information
            to administer your accounts or your contract with us or to comply
            with our legal obligations, this is mandatory and we will not be
            able to manage our relationship with you without this. In all other
            cases, the provision of requested personal information is optional,
            but this may affect your ability to participate in certain
            App-related activities or being able to access and use certain
            features and services, where the information is needed for those
            purposes. To exercise your privacy rights, you can email us at the
            address given below in the &apos;Contacting PearAI About Your
            Privacy&apos; section of this Privacy Policy.
            <h2 className="h2 my-4">Data retention and deletion</h2>
            If you already have an account on the Apps, you may access, update,
            alter, or delete your basic user profile information by logging into
            your account and updating profile settings. PearAI will retain your
            information for as long as your account is active or as needed to
            perform our contractual obligations, provide you services through
            the App, to comply with legal obligations, resolve disputes,
            preserve legal rights, or enforce our agreements. Retention periods
            will be determined taking into account the type of information that
            is collected and the purpose for which it is collected, bearing in
            mind the requirements applicable to the situation and the need to
            destroy outdated, unused information at the earliest reasonable
            opportunity. For instance, in respect of data held for the
            management of customers and potential customers, we consider the
            lead time necessary to develop and maintain our commercial
            relationships and how recent our interactions are with you. We may
            rectify, update or remove incomplete or inaccurate information, at
            any time and at our own discretion. For more information on our
            retention periods you can contact us using the details in the
            &apos;Contacting PearAI About Your Privacy&apos; section of this
            Privacy Policy. Please note that due to the open source nature of
            our products, services, and community, we may retain limited
            personal information indefinitely in order to ensure transactional
            integrity and nonrepudiation. For example, if you provide your
            information in connection with a blog post, GitHub issue or comment,
            we may display that information even if you have deleted your
            account as we do not automatically delete community posts.
            <h2 className="h2 my-4">Contacting PearAI About Your Privacy</h2>
            The relevant data controller for any personal information processed
            in connection with our Apps is PearAI Inc. If you have any questions
            about this Privacy Policy or our privacy and security practices or
            you wish to make a complaint about our compliance with applicable
            privacy laws, please feel free to contact us at trypearai@gmail.com.
            If you have questions or concerns about the way we are handling your
            personal information, or would like to exercise your privacy rights,
            please email us with the subject line &quot;Privacy Concern&quot; at
            trypearai@gmail.com. In most cases, we will respond within 30 days
            of receiving your message but please note for promptest response, we
            recommend emailing us.
            <h2 className="h2 my-4">Privacy policy changes</h2>
            PearAI may change its privacy policy from time to time, and in
            PearAI&apos;s sole discretion. If we make material changes to this
            Privacy Policy, we will notify you by updating the date of this
            Privacy Policy . Your continued use of this site after any change in
            this Privacy Policy will constitute your acceptance of such change.
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:gap-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
