export default function TermsOfServiceComponent() {
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
          <div className="mx-auto max-w-3xl text-left md:pb-16">
            <h1 className="h1" data-aos="fade-up">
              Terms of Service
            </h1>

            <div className="prose prose-base space-y-4 pt-6 text-left [&_p]:mb-4">
              <p>
                <strong>Last updated June 9th, 2024</strong>
              </p>
              <p>
                Welcome, and thank you for your interest in PearAI, Inc.
                (PearAI,” “we,” or “us”) and our website at&nbsp;
                <a href="http://www.trypear.ai">www.trypear.ai</a>, along with
                the Software (as defined below), our related websites, hosted
                applications or other downloadable applications, and other
                services provided by us (collectively, the “Service”). These
                Terms and Conditions, including PearAI’s Privacy Policy
                (available at:&nbsp;
                <a href="https://trypear.ai/privacy">
                  https://trypear.ai/privacy
                </a>
                ), (together, these “Terms”) are a legally binding contract
                between you and PearAI regarding your use of the Service.
              </p>
              <p>
                <strong>PLEASE READ THE FOLLOWING TERMS CAREFULLY:</strong>
              </p>
              <p>
                <strong>
                  BY CLICKING “I ACCEPT,” SIGNING AN ORDER FORM THAT REFERENCES
                  THESE TERMS, OR BY DOWNLOADING, INSTALLING, OR OTHERWISE
                  ACCESSING OR USING THE SERVICE
                </strong>
                , YOU AGREE THAT YOU HAVE READ AND UNDERSTOOD, AND, AS A
                CONDITION TO YOUR USE OF THE SERVICE, YOU AGREE TO BE BOUND BY,
                THESE TERMS. IF YOU ARE NOT ELIGIBLE, OR DO NOT AGREE TO THE
                TERMS, THEN YOU DO NOT HAVE OUR PERMISSION TO USE THE SERVICE.
                YOUR USE OF THE SERVICE, AND PEARAI’S PROVISION OF THE SERVICE
                TO YOU, CONSTITUTES AN AGREEMENT BY PEARAI AND BY YOU TO BE
                BOUND BY THESE TERMS.
              </p>
              <p>
                If you are using the Service in the course of your work for an
                entity or organization that has a master subscription agreement
                with PearAI in effect, then such master subscription agreement
                controls in the event of a conflict with these Terms.
              </p>
              <p>
                <strong>NOTICE OF ARBITRATION AND CLASS ACTION WAIVER</strong>.
                Except for certain kinds of disputes described in Section 15,
                you agree that disputes arising under these Terms will be
                resolved by binding, individual arbitration, and BY ACCEPTING
                THESE TERMS, YOU AND PEARAI ARE EACH WAIVING THE RIGHT TO A
                TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR
                REPRESENTATIVE PROCEEDING.
              </p>
              <ol>
                <li>
                  <p>
                    <strong>PearAI Service Overview</strong>. Our PearAI
                    platform offers a suite of coding tools driven by machine
                    learning to help developers write code more easily and
                    efficiently and can provide suggested code, outputs or other
                    functions.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Eligibility</strong>. You must be at least the age
                    of majority in your jurisdiction (e.g., 18 years old in the
                    United States). By agreeing to these Terms, you represent
                    and warrant to us that: (a) you are at least 18 years old;
                    (b) you have not previously been suspended or removed from
                    the Service; and (c) your registration and your use of the
                    Service is in compliance with any and all applicable laws
                    and regulations. If you are an entity, organization, or
                    company, the individual accepting these Terms on your behalf
                    represents and warrants that they have authority to bind you
                    to these Terms and you agree to be bound by these Terms.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Accounts and Registration</strong>. To access most
                    features of the Service, you must register for an account.
                    When you register for an account, you may be required to
                    provide us with some information about yourself, such as
                    your name, email address, or other contact information. You
                    agree that the information you provide to us is accurate,
                    complete, and not misleading, and that you will keep it
                    accurate and up to date at all times. When you register, you
                    will be asked to create a password. You are solely
                    responsible for maintaining the confidentiality of your
                    account and password, and you accept responsibility for all
                    activities that occur under your account. If you believe
                    that your account is no longer secure, then you should
                    immediately notify us at&nbsp;
                    <a href="mailto:trypearai@gmail.com">trypearai@gmail.com</a>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    <strong>General Payment Terms</strong>. Certain features of
                    the Service may require you to pay fees. Before you pay any
                    fees, you will have an opportunity to review and accept the
                    fees that you will be charged. Unless otherwise specifically
                    provided for in these Terms, all fees are in U.S. Dollars
                    and are non-refundable, except as required by law. The
                    pricing and payment terms in this Section 4 are subject to
                    any pricing and payment terms set forth in an Order Form.
                  </p>
                  <p>
                    4.1. <strong>Price</strong>. PearAI reserves the right to
                    determine pricing for the Service. PearAI will make
                    reasonable efforts to keep pricing information published on
                    the Service up to date. We encourage you to check our
                    pricing page periodically for current pricing information.
                    PearAI may change the fees for any feature of the Service,
                    including additional fees or charges, if PearAI gives you
                    advance notice of changes before they apply through the
                    Service user interface, a pop-up notice, email, or through
                    other reasonable means. Your continued use of the Service
                    after the price change becomes effective constitutes your
                    agreement to pay the changed amount. You will be responsible
                    for all taxes associated with the Service, other than taxes
                    based on PearAI’s net income. PearAI, at its sole
                    discretion, may make promotional offers with different
                    features and different pricing to any of PearAI’s customers.
                    These promotional offers, unless made to you, will not apply
                    to your offer or these Terms.
                  </p>
                  <p>
                    4.2. <strong>Payment Processing</strong>. Notwithstanding
                    any amounts owed to PearAI hereunder, PEARAI DOES NOT
                    DIRECTLY PROCESS PAYMENT FOR ANY SERVICES. To facilitate
                    payment for the Service via bank account, credit card, or
                    debit card, we use Stripe, Inc. and its affiliates (“
                    <strong>Stripe</strong>”), a third-party payment processor.
                    These payment processing services are provided by Stripe and
                    are subject to&nbsp;the&nbsp;Stripe terms and conditions and
                    other policies available at{" "}
                    <a href="https://stripe.com/legal">
                      https://stripe.com/legal
                    </a>{" "}
                    and Stripe&apos;s Global Privacy Policy available at:{" "}
                    <a href="https://stripe.com/privacy">
                      https://stripe.com/privacy
                    </a>{" "}
                    (collectively, the &quot;<strong>Stripe Agreements</strong>
                    &quot;). By agreeing to these Terms, users that use the
                    payment functions of the Service also agree to be bound by
                    the Stripe Agreements, as the same may be modified by Stripe
                    from time to time. You hereby authorize Stripe to store and
                    continue billing your specified payment method even after
                    such payment method has expired, to avoid interruptions in
                    payment for your use of the Service. Please contact Stripe
                    for more information. PearAI assumes no liability or
                    responsibility for any payments you make through the
                    Service.
                  </p>
                  <p>
                    4.3. <strong>Subscription Service</strong>. The Service may
                    include certain subscription-based plans with automatically
                    recurring payments for periodic charges (“
                    <strong>Subscription Service</strong>”). The “
                    <strong>Subscription Billing Date</strong>” is the date when
                    you purchase your first subscription to the Service. The
                    Subscription Service will begin on the Subscription Billing
                    Date and continue for the subscription period that you
                    select on your account (such period, the “
                    <strong>Initial Subscription Period</strong>”), and will
                    automatically renew for successive periods of the same
                    duration as the Initial Subscription Period (the Initial
                    Subscription Period and each such renewal period, each a “
                    <strong>Subscription Period</strong>”) unless you cancel the
                    Subscription Service or we terminate it. If you activate a
                    Subscription Service, then you authorize PearAI or its
                    third-party payment processors to periodically charge, on a
                    going-forward basis and until cancellation of the
                    Subscription Service, all accrued sums on or before the
                    payment due date. For information on the “
                    <strong>Subscription Fee</strong>”, please see our pricing
                    page. Your account will be charged automatically on the
                    Subscription Billing Date and thereafter on the renewal date
                    of your Subscription Service for all applicable fees and
                    taxes for the next Subscription Period. You must cancel your
                    Subscription Service before it renews in order to avoid
                    billing of the next periodic Subscription Fee to your
                    account. PearAI or its third-party payment processor will
                    bill the periodic Subscription Fee to the payment method
                    associated with your account or that you otherwise provide
                    to us. You may cancel the Subscription Service by using the
                    cancellation functionality made available in your billing
                    menu or by contacting us at&nbsp;
                    <a href="mailto:trypearai@gmail.com">trypearai@gmail.com</a>
                    . YOUR CANCELLATION MUST BE RECEIVED BEFORE THE RENEWAL DATE
                    IN ORDER TO AVOID CHARGE FOR THE NEXT SUBSCRIPTION PERIOD.
                  </p>
                  <p>
                    4.4. <strong>Delinquent Accounts</strong>. PearAI may
                    suspend or terminate access to the Service, including
                    fee-based portions of the Service, for any account for which
                    any amount is due but unpaid. In addition to the amount due
                    for the Service, a delinquent account will be charged with
                    fees or charges that are incidental to any chargeback or
                    collection of any unpaid amount, including collection fees.
                    If your payment method is no longer valid at the time a
                    renewal Subscription Fee is due, then PearAI reserves the
                    right to delete your account and any information associated
                    with your account without any liability to you.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Customer and Usage Data</strong>
                  </p>
                  <p>
                    7.1. <strong>Customer Data</strong>. Any data, text, and any
                    other works of authorship or other works, including source
                    code (collectively, “<strong>Customer Data</strong>”) that
                    you submit, upload, or otherwise post to or transmit (such
                    actions, collectively, “Upload”) to the Service are only
                    used to provide Suggestions to you unless you opt-in to
                    allow PearAI to use such Customer Data to improve and
                    enhance the Service and for other development, diagnostic
                    and corrective purposes in connection with the Service and
                    other PearAI offerings. Customer Data is transmitted only to
                    generate Suggestions in real-time and are deleted once
                    Suggestions are generated. Customer Data is not used for any
                    other purpose, including the training of language models.
                    Customer Data is encrypted during transit and is not stored
                    at rest.
                  </p>
                  <p>
                    7.2. <strong>Usage Data</strong>. PearAI may collect,
                    generate, and derive performance, analytical, or usage data
                    relating to your access to or use of the Service (“
                    <strong>Usage Data</strong>”). Usage Data will not include
                    any Customer Data. PearAI will only use Usage Data to
                    provide the Service to you, to monitor the performance and
                    stability of the Service, and to prevent or address
                    technical issues with the Service. PearAI may also anonymize
                    Usage Data, aggregate it with other data, and use that
                    aggregated, anonymized data to improve its products and
                    services.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Third-Party Software</strong>. The Service may
                    include or incorporate third-party software components that
                    are generally available free of charge under licenses
                    granting recipients broad rights to copy, modify, and
                    distribute those components (“
                    <strong>Third-Party Components</strong>”). Although the
                    Service is provided to you subject to these Terms, nothing
                    in these Terms prevents, restricts, or is intended to
                    prevent or restrict you from obtaining Third-Party
                    Components under the applicable third-party licenses or to
                    limit your use of Third-Party Components under those
                    third-party licenses.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Communications; Email</strong>. We may send you
                    emails concerning our products and services, as well as
                    those of third parties. You may opt out of promotional
                    emails by following the unsubscribe instructions in the
                    promotional email itself.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Modification of Terms</strong>. We may, from time to
                    time, change these Terms. Please check these Terms
                    periodically for changes. If we make any material
                    modifications, we will notify you by updating the date at
                    the top of these Terms and by maintaining a current version
                    of these Terms at{" "}
                    <a href="https://trypear.ai/terms-of-service">
                      https://trypear.ai/terms-of-service
                    </a>
                    . All modifications will be effective when they are posted,
                    and your continued accessing or use of the Service will
                    serve as confirmation of your acceptance of those
                    modifications. If you do not agree to the modified Terms,
                    then you should discontinue your use of the Service.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      Term, Termination, and Modification of the Service
                    </strong>
                  </p>
                  <p>
                    11.1. <strong>Term</strong>. These Terms are effective
                    beginning when you accept the Terms or first download,
                    install, access, or use the Service, and ending on the
                    earlier of: (i) the effective date of termination by either
                    party in accordance with these Terms, including when
                    terminated as described in Section 11.2, or (ii) when no
                    Order Form remains in effect, if you and PearAI had
                    previously executed an Order Form.
                  </p>
                  <p>
                    11.2. <strong>Termination</strong>. If you violate any
                    provision of these Terms, then your authorization to access
                    the Service and these Terms automatically terminate. In
                    addition, PearAI may, at its sole discretion, terminate
                    these Terms or your account on the Service, or suspend or
                    terminate your access to the Service, at any time for any
                    reason or no reason, with or without notice, and without any
                    liability to you arising from such termination. If you are
                    using the Services under a free or trial account, you may
                    terminate your use of the Services at any time by deleting
                    your account. If you have purchased a paid subscription for
                    the Services, you may only terminate your account following
                    conclusion of your applicable subscription period by
                    providing us with notice of cancellation before the end of
                    your then-current subscription term.
                  </p>
                  <p>
                    11.3. <strong>Effect of Termination</strong>. Upon
                    termination of these Terms: (a) your license rights will
                    terminate and you must immediately cease all use of the
                    Service; (b) you will no longer be authorized to access your
                    account or the Service; (c) you must pay PearAI any unpaid
                    amount that was due prior to termination; and (d) all
                    payment obligations accrued prior to termination and
                    Sections 5.3 (Feedback), 6 (Ownership; Proprietary Rights),
                    11.3 (Effect of Termination), 12 (Indemnity), 13
                    (Disclaimers; No Warranties by PearAI), 14 (Limitation of
                    Liability), 15 (Dispute Resolution and Arbitration), and 16
                    (Miscellaneous) will survive. You are solely responsible for
                    retaining copies of any content you upload to the Service,
                    including Customer Data. Upon termination of your account,
                    you may lose access rights to any information you provided
                    to the Service. If your account has been terminated for a
                    breach of these Terms, then you are prohibited from creating
                    a new account on the Service using a different name, email
                    address or other forms of account verification.
                  </p>
                  <p>
                    11.4. <strong>Modification of the Service</strong>. PearAI
                    reserves the right to modify or discontinue all or any
                    portion of the Service at any time (including by limiting or
                    discontinuing certain features of the Service), temporarily
                    or permanently, without notice to you. PearAI will have no
                    liability for any change to the Service, including any
                    paid-for functionalities of the Service, or any suspension
                    or termination of your access to or use of the Service. You
                    should retain copies of any User Content you Post to the
                    Service so that you have permanent copies in the event the
                    Service is modified in such a way that you lose access to
                    User Content you Posted to the Service.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Indemnity</strong>. To the fullest extent permitted
                    by law, you are responsible for your use of the Service, and
                    you will defend and indemnify PearAI, its affiliates and
                    their respective shareholders, directors, managers, members,
                    officers, employees, consultants, and agents (together, the
                    “<strong>PearAI Entities</strong>”) from and against every
                    claim brought by a third party, and any related liability,
                    damage, loss, and expense, including attorneys’ fees and
                    costs, arising out of or connected with: (1) your
                    unauthorized use of, or misuse of, the Service; (2) your
                    violation of any portion of these Terms, any representation,
                    warranty, or agreement referenced in these Terms, or any
                    applicable law or regulation; (3) your violation of any
                    third-party right, including any intellectual property right
                    or publicity, confidentiality, other property, or privacy
                    right; or (4) any dispute or issue between you and any third
                    party. We reserve the right, at our own expense, to assume
                    the exclusive defense and control of any matter otherwise
                    subject to indemnification by you (without limiting your
                    indemnification obligations with respect to that matter),
                    and in that case, you agree to cooperate with our defense of
                    those claims.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Disclaimers; No Warranties by PearAI</strong>
                  </p>
                  <p>
                    13.1. THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE
                    THROUGH THE SERVICE, INCLUDING SUGGESTIONS, ARE PROVIDED “AS
                    IS” AND ON AN “AS AVAILABLE” BASIS. PEARAI DISCLAIMS ALL
                    WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, RELATING
                    TO THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE
                    THROUGH THE SERVICE, INCLUDING: (a) ANY IMPLIED WARRANTY OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
                    QUIET ENJOYMENT, OR NON-INFRINGEMENT; AND (b) ANY WARRANTY
                    ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE. PEARAI
                    DOES NOT WARRANT THAT THE SERVICE OR ANY PORTION OF THE
                    SERVICE, OR ANY MATERIALS OR CONTENT OFFERED THROUGH THE
                    SERVICE, INCLUDING SUGGESTIONS, WILL BE UNINTERRUPTED,
                    SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL
                    COMPONENTS, AND PEARAI DOES NOT WARRANT THAT ANY OF THOSE
                    ISSUES WILL BE CORRECTED.
                  </p>
                  <p>
                    13.2. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN,
                    OBTAINED BY YOU FROM THE SERVICE OR PEARAI ENTITIES OR ANY
                    MATERIALS OR CONTENT AVAILABLE THROUGH THE SERVICE,
                    INCLUDING SUGGESTIONS, WILL CREATE ANY WARRANTY REGARDING
                    ANY OF THE PEARAI ENTITIES OR THE SERVICE THAT IS NOT
                    EXPRESSLY STATED IN THESE TERMS. WE ARE NOT RESPONSIBLE FOR
                    ANY DAMAGE THAT MAY RESULT FROM THE SERVICE AND YOUR DEALING
                    WITH ANY OTHER SERVICE USER. YOU UNDERSTAND AND AGREE THAT
                    YOU USE ANY PORTION OF THE SERVICE AT YOUR OWN DISCRETION
                    AND RISK, AND THAT WE ARE NOT RESPONSIBLE FOR ANY DAMAGE TO
                    YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM OR MOBILE
                    DEVICE USED IN CONNECTION WITH THE SERVICE) OR ANY LOSS OF
                    DATA, INCLUDING USER CONTENT.
                  </p>
                  <p>
                    13.3. THE LIMITATIONS, EXCLUSIONS AND DISCLAIMERS IN THIS
                    SECTION 13 APPLY TO THE FULLEST EXTENT PERMITTED BY LAW.
                    PearAI does not disclaim any warranty or other right that
                    PearAI is prohibited from disclaiming under applicable law.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Limitation of Liability</strong>
                  </p>
                  <p>
                    14.1. TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT
                    WILL THE PEARAI ENTITY BE LIABLE TO YOU FOR ANY INDIRECT,
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES
                    (INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY
                    OTHER INTANGIBLE LOSS) ARISING OUT OF OR RELATING TO YOUR
                    ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE
                    SERVICE OR ANY MATERIALS OR CONTENT ON THE SERVICE,
                    INCLUDING SUGGESTIONS, WHETHER BASED ON WARRANTY, CONTRACT,
                    TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL
                    THEORY, AND WHETHER OR NOT ANY PEARAI ENTITY HAS BEEN
                    INFORMED OF THE POSSIBILITY OF DAMAGE.
                  </p>
                  <p>
                    14.2. TO THE FULLEST EXTENT PERMITTED BY LAW, THE AGGREGATE
                    LIABILITY OF THE PEARAI ENTITIES TO YOU FOR ALL CLAIMS
                    ARISING OUT OF OR RELATING TO THE USE OF OR ANY INABILITY TO
                    USE ANY PORTION OF THE SERVICE OR OTHERWISE UNDER THESE
                    TERMS, WHETHER IN CONTRACT, TORT, OR OTHERWISE, IS LIMITED
                    TO THE GREATER OF: (a) THE AMOUNT YOU HAVE PAID TO PEARAI
                    FOR ACCESS TO AND USE OF THE SERVICE IN THE 6 MONTHS PRIOR
                    TO THE EVENT OR CIRCUMSTANCE GIVING RISE TO THE CLAIM OR, IF
                    GREATER, (b) USD 100.
                  </p>
                  <p>
                    14.3. EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A
                    LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR
                    EXCLUSION OF DAMAGES IS INTENDED TO AND DOES ALLOCATE THE
                    RISKS BETWEEN THE PARTIES UNDER THESE TERMS. THIS ALLOCATION
                    IS AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN
                    THE PARTIES. EACH OF THESE PROVISIONS IS SEVERABLE AND
                    INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS. THE
                    LIMITATIONS IN THIS SECTION 14 WILL APPLY EVEN IF ANY
                    LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Dispute Resolution By Binding Arbitration</strong>
                  </p>
                  <p>
                    <strong>
                      PLEASE READ THIS SECTION CAREFULLY AS IT AFFECTS YOUR
                      RIGHTS.
                    </strong>
                  </p>
                  <p>
                    15.1. <strong>Agreement to Arbitrate</strong>. This Dispute
                    Resolution by Binding Arbitration section is referred to in
                    these Terms as the “<strong>Arbitration Agreement</strong>.”
                    You agree that any and all disputes or claims that have
                    arisen or may arise between you and PearAI, whether arising
                    out of or relating to these Terms (including any alleged
                    breach thereof), the Service, any advertising, or any aspect
                    of the relationship or transactions between us, will be
                    resolved exclusively through final and binding arbitration,
                    rather than a court, in accordance with the terms of this
                    Arbitration Agreement, except that you may assert individual
                    claims in small claims court, if your claims qualify.
                    Further, this Arbitration Agreement does not preclude you
                    from bringing issues to the attention of federal, state, or
                    local agencies, and such agencies can, if the law allows,
                    seek relief against us on your behalf. You agree that, by
                    entering into these Terms, you and PearAI are each waiving
                    the right to a trial by jury or to participate in a class
                    action. Your rights will be determined by a neutral
                    arbitrator, not a judge or jury. The Federal Arbitration Act
                    governs the interpretation and enforcement of this
                    Arbitration Agreement.
                  </p>
                  <p>
                    15.2.{" "}
                    <strong>
                      Prohibition of Class and Representative Actions and
                      Non-Individualized Relief
                    </strong>
                    . YOU AND PEARAI AGREE THAT EACH OF US MAY BRING CLAIMS
                    AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT AS A
                    PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                    REPRESENTATIVE ACTION OR PROCEEDING. UNLESS BOTH YOU AND
                    PEARAI AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE
                    OR JOIN MORE THAN ONE PERSON’S OR PARTY’S CLAIMS AND MAY NOT
                    OTHERWISE PRESIDE OVER ANY FORM OF A CONSOLIDATED,
                    REPRESENTATIVE, OR CLASS PROCEEDING. ALSO, THE ARBITRATOR
                    MAY AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND
                    DECLARATORY RELIEF) ONLY IN FAVOR OF THE INDIVIDUAL PARTY
                    SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO PROVIDE
                    RELIEF NECESSITATED BY THAT PARTY’S INDIVIDUAL CLAIM(S),
                    EXCEPT THAT YOU MAY PURSUE A CLAIM FOR AND THE ARBITRATOR
                    MAY AWARD PUBLIC INJUNCTIVE RELIEF UNDER APPLICABLE LAW TO
                    THE EXTENT REQUIRED FOR THE ENFORCEABILITY OF THIS
                    PROVISION.
                  </p>
                  <p>
                    15.3. <strong>Pre-Arbitration Dispute Resolution</strong>.
                    PearAI is always interested in resolving disputes amicably
                    and efficiently, and most customer concerns can be resolved
                    quickly and to the customer’s satisfaction by emailing
                    customer support at&nbsp;
                    <a href="mailto:trypearai@gmail.com">trypearai@gmail.com</a>
                    . If such efforts prove unsuccessful, a party who intends to
                    seek arbitration must first send to the other, by certified
                    mail, a written Notice of Dispute (“<strong>Notice</strong>
                    ”). The Notice to PearAI should be sent to (“
                    <strong>Notice Address</strong>”). The Notice must (i)
                    describe the nature and basis of the claim or dispute and
                    (ii) set forth the specific relief sought. If PearAI and you
                    do not resolve the claim within sixty (60) calendar days
                    after the Notice is received, you or PearAI may commence an
                    arbitration proceeding. During the arbitration, the amount
                    of any settlement offer made by PearAI or you will not be
                    disclosed to the arbitrator until after the arbitrator
                    determines the amount, if any, to which you or PearAI is
                    entitled.
                  </p>
                  <p>
                    15.4. <strong>Arbitration Procedures</strong>. Arbitration
                    will be conducted by a neutral arbitrator in accordance with
                    the American Arbitration Association’s (“AAA”) rules and
                    procedures, including the AAA’s Consumer Arbitration Rules
                    (collectively, the “AAA Rules”), as modified by this
                    Arbitration Agreement. For information on the AAA, please
                    visit its website,{" "}
                    <a href="https://www.adr.org">https://www.adr.org</a>.
                    Information about the AAA Rules and fees for consumer
                    disputes can be found at the AAA’s consumer arbitration
                    page,{" "}
                    <a href="https://www.adr.org/consumer">
                      https://www.adr.org/consumer
                    </a>
                    . If there is any inconsistency between any term of the AAA
                    Rules and any term of this Arbitration Agreement, the
                    applicable terms of this Arbitration Agreement will control
                    unless the arbitrator determines that the application of the
                    inconsistent Arbitration Agreement terms would not result in
                    a fundamentally fair arbitration. The arbitrator must also
                    follow the provisions of these Terms as a court would. All
                    issues are for the arbitrator to decide, including issues
                    relating to the scope, enforceability, and arbitrability of
                    this Arbitration Agreement. Although arbitration proceedings
                    are usually simpler and more streamlined than trials and
                    other judicial proceedings, the arbitrator can award the
                    same damages and relief on an individual basis that a court
                    can award to an individual under these Terms and applicable
                    law. Decisions by the arbitrator are enforceable in court
                    and may be overturned by a court only for very limited
                    reasons.
                  </p>
                  <p>
                    Unless PearAI and you agree otherwise, any arbitration
                    hearings will take place in a reasonably convenient location
                    for both parties with due consideration of their ability to
                    travel and other pertinent circumstances. If the parties are
                    unable to agree on a location, the determination will be
                    made by AAA. If your claim is for $10,000 or less, PearAI
                    agrees that you may choose whether the arbitration will be
                    conducted solely on the basis of documents submitted to the
                    arbitrator, through a telephonic hearing, or by an in-person
                    hearing as established by the AAA Rules. If your claim
                    exceeds $10,000, the right to a hearing will be determined
                    by the AAA Rules. Regardless of the manner in which the
                    arbitration is conducted, the arbitrator will issue a
                    reasoned written decision sufficient to explain the
                    essential findings and conclusions on which the award is
                    based.
                  </p>
                  <p>
                    15.5. <strong>Costs of Arbitration</strong>. Payment of all
                    filing, administration, and arbitrator fees (collectively,
                    the “<strong>Arbitration Fees</strong>”) will be governed by
                    the AAA Rules, unless otherwise provided in this Arbitration
                    Agreement. To the extent any Arbitration Fees are not
                    specifically allocated to either PearAI or you under the AAA
                    Rules, PearAI and you shall split them equally; provided
                    that if you are able to demonstrate to the arbitrator that
                    you are economically unable to pay your portion of such
                    Arbitration Fees or if the arbitrator otherwise determines
                    for any reason that you should not be required to pay your
                    portion of any Arbitration Fees, PearAI will pay your
                    portion of such fees. In addition, if you demonstrate to the
                    arbitrator that the costs of arbitration will be prohibitive
                    as compared to the costs of litigation, PearAI will pay as
                    much of the Arbitration Fees as the arbitrator deems
                    necessary to prevent the arbitration from being
                    cost-prohibitive. Any payment of attorneys’ fees will be
                    governed by the AAA Rules.
                  </p>
                  <p>
                    15.6. <strong>Confidentiality</strong>. All aspects of the
                    arbitration proceeding, and any ruling, decision, or award
                    by the arbitrator, will be strictly confidential for the
                    benefit of all parties.
                  </p>
                  <p>
                    15.7. <strong>Severability</strong>. If a court or the
                    arbitrator decides that any term or provision of this
                    Arbitration Agreement (other than the subsection (b) above
                    titled “Prohibition of Class and Representative Actions and
                    Non-Individualized Relief” above) is invalid or
                    unenforceable, the parties agree to replace such term or
                    provision with a term or provision that is valid and
                    enforceable and that comes closest to expressing the
                    intention of the invalid or unenforceable term or provision,
                    and this Arbitration Agreement will be enforceable as so
                    modified. If a court or the arbitrator decides that any of
                    the provisions of subsection (b) above titled “Prohibition
                    of Class and Representative Actions and Non-Individualized
                    Relief” are invalid or unenforceable, then the entirety of
                    this Arbitration Agreement will be null and void, unless
                    such provisions are deemed to be invalid or unenforceable
                    solely with respect to claims for public injunctive relief.
                    The remainder of these Terms will continue to apply.
                  </p>
                  <p>
                    15.8.{" "}
                    <strong>Future Changes to Arbitration Agreement</strong>{" "}
                    Notwithstanding any provision in these Terms to the
                    contrary, PearAI agrees that if it makes any future change
                    to this Arbitration Agreement (other than a change to the
                    Notice Address) while you are a user of the Service, you may
                    reject any such change by sending PearAI written notice
                    within thirty (30) calendar days of the change to the Notice
                    Address provided above. By rejecting any future change, you
                    are agreeing that you will arbitrate any dispute between us
                    in accordance with the language of this Arbitration
                    Agreement as of the date you first accepted these Terms (or
                    accepted any subsequent changes to these Terms).
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Miscellaneous</strong>
                  </p>
                  <p>
                    16.1. <strong>General Terms</strong>. These Terms, including
                    the Privacy Policy, and any other agreements expressly
                    incorporated by reference into these Terms, are the entire
                    and exclusive understanding and agreement between you and
                    PearAI regarding your use of the Service. You may not assign
                    or transfer these Terms or your rights under these Terms, in
                    whole or in part, by operation of law or otherwise, without
                    our prior written consent. We may assign these Terms and all
                    rights granted under these Terms, including with respect to
                    your User Content, at any time without notice or consent.
                    The failure to require performance of any provision will not
                    affect our right to require performance at any other time
                    after that, nor will a waiver by us of any breach or default
                    of these Terms, or any provision of these Terms, be a waiver
                    of any subsequent breach or default or a waiver of the
                    provision itself. Use of Section headers in these Terms is
                    for convenience only and will not have any impact on the
                    interpretation of any provision. Throughout these Terms the
                    use of the word “including” means “including but not limited
                    to.” If any part of these Terms is held to be invalid or
                    unenforceable, then the unenforceable part will be given
                    effect to the greatest extent possible, and the remaining
                    parts will remain in full force and effect.
                  </p>
                  <p>
                    16.2. <strong>Governing Law</strong>. These Terms are
                    governed by the laws of the State of California without
                    regard to conflict of law principles. All disputes and
                    claims arising from these Terms will be governed in
                    accordance with the arbitration provisions set forth above
                    in Section 15; provided that you and PearAI submit to the
                    personal and exclusive jurisdiction of the state courts and
                    federal courts located within Santa Clara County, California
                    for (a) individuals claims brought in small claims court,
                    (b) claims for injunctive or equitable relief, (c) claims
                    involving infringement or violation of intellectual property
                    rights, and (d) enforcement of any awards or relief provided
                    following arbitration. We operate the Service from the
                    United States, and we make no representation that Materials
                    included in the Service are appropriate or available for use
                    in other locations.
                  </p>
                  <p>
                    16.3. <strong>Privacy Policy</strong>. Please read the
                    PearAI Privacy Policy (available at:&nbsp;
                    <a href="https://trypear.ai/privacy">
                      https://trypear.ai/privacy
                    </a>
                    ) (the “Privacy Policy”) carefully for information relating
                    to our collection, use, storage, and disclosure of your
                    personal information. The PearAI Privacy Policy is
                    incorporated by this reference into, and made a part of,
                    these Terms.
                  </p>
                  <p>
                    16.4. <strong>Consent to Electronic Communications</strong>.
                    By using the Service, you consent to receiving certain
                    electronic communications from us as further described in
                    our Privacy Policy. Please read our Privacy Policy to learn
                    more about our electronic communications practices. You
                    agree that any notices, agreements, disclosures, or other
                    communications that we send to you electronically will
                    satisfy any legal communication requirements, including that
                    those communications be in writing.
                  </p>
                  <p>
                    16.5. <strong>Contact Information</strong>. The Service is
                    offered by PearAI, Inc., located at 54 State Street, Ste 804
                    Albany NY 12207. You may contact us by sending
                    correspondence to that address or by emailing us at&nbsp;
                    <a href="mailto:trypearai@gmail.com">trypearai@gmail.com</a>
                    .
                  </p>
                  <p>
                    16.6. <strong>Notice to California Residents</strong>. If
                    you are a California resident, then under California Civil
                    Code Section 1789.3, you may contact the Complaint
                    Assistance Unit of the Division of Consumer Services of the
                    California Department of Consumer Affairs in writing at 1625
                    N. Market Blvd., Suite S-202, Sacramento, California 95834,
                    or by telephone at +1-800-952-5210 in order to resolve a
                    complaint regarding the Service or to receive further
                    information regarding use of the Service.
                  </p>
                  <p>
                    16.7. <strong>No Support</strong>. We are under no
                    obligation to provide support for the Service. In instances
                    where we may offer support, the support will be subject to
                    published policies.
                  </p>
                  <p>
                    16.8. <strong>International Use</strong>. The Service is
                    intended for visitors located within the United States. We
                    make no representation that the Service is appropriate or
                    available for use outside of the United States. Access to
                    the Service from countries or territories or by individuals
                    where such access is illegal is prohibited.
                  </p>
                </li>
              </ol>
            </div>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:gap-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
