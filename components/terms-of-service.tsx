import Link from "next/link";
import { CONTACT_EMAIL } from "@/utils/constants";

export default function TermsOfServiceComponent() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="relative pb-10 pt-32 md:pb-16 md:pt-40">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-left text-gray-800 md:pb-16">
            <h1
              className="mb-28 text-6xl font-medium text-gray-900"
              data-aos="fade-up"
            >
              Terms of Service
            </h1>

            <div className="space-y-4">
              <div className="mb-8 text-gray-900">
                <p>
                  <strong>Last updated June 9th, 2024</strong>
                </p>
              </div>

              <p>
                Welcome, and thank you for your interest in PearAI, Inc.
                (PearAI,” “we,” or “us”) and our website at&nbsp;
                <Link
                  href="http://www.trypear.ai"
                  className="font-medium text-gray-900 underline"
                >
                  www.trypear.ai
                </Link>
                , along with the Software (as defined below), our related
                websites, hosted applications or other downloadable
                applications, and other services provided by us (collectively,
                the “Service”). These Terms and Conditions, including PearAI’s
                Privacy Policy (available at:&nbsp;
                <Link
                  href="https://trypear.ai/privacy"
                  className="font-medium text-gray-900 underline"
                >
                  https://trypear.ai/privacy
                </Link>
                ), (together, these “Terms”) are a legally binding contract
                between you and PearAI regarding your use of the Service.
              </p>

              <p>
                <strong className="text-gray-900">
                  PLEASE READ THE FOLLOWING TERMS CAREFULLY:
                </strong>
              </p>

              <p>
                <strong className="text-gray-900">
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
                <strong className="text-gray-900">
                  NOTICE OF ARBITRATION AND CLASS ACTION WAIVER
                </strong>
                . Except for certain kinds of disputes described in Section 15,
                you agree that disputes arising under these Terms will be
                resolved by binding, individual arbitration, and BY ACCEPTING
                THESE TERMS, YOU AND PEARAI ARE EACH WAIVING THE RIGHT TO A
                TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR
                REPRESENTATIVE PROCEEDING.
              </p>

              <ol className="list-decimal space-y-4 pl-8">
                <li>
                  <strong className="text-gray-900">
                    PearAI Service Overview
                  </strong>
                  . Our PearAI platform offers a suite of coding tools driven by
                  machine learning to help developers write code more easily and
                  efficiently and can provide suggested code, outputs or other
                  functions.
                </li>

                <li>
                  <strong className="text-gray-900">Eligibility</strong>. You
                  must be at least the age of majority in your jurisdiction
                  (e.g., 18 years old in the United States). By agreeing to
                  these Terms, you represent and warrant to us that: (a) you are
                  at least 18 years old; (b) you have not previously been
                  suspended or removed from the Service; and (c) your
                  registration and your use of the Service is in compliance with
                  any and all applicable laws and regulations. If you are an
                  entity, organization, or company, the individual accepting
                  these Terms on your behalf represents and warrants that they
                  have authority to bind you to these Terms and you agree to be
                  bound by these Terms.
                </li>

                <li>
                  <strong className="text-gray-900">
                    Accounts and Registration
                  </strong>
                  . To access most features of the Service, you must register
                  for an account. When you register for an account, you may be
                  required to provide us with some information about yourself,
                  such as your name, email address, or other contact
                  information. You agree that the information you provide to us
                  is accurate, complete, and not misleading, and that you will
                  keep it accurate and up to date at all times. When you
                  register, you will be asked to create a password. You are
                  solely responsible for maintaining the confidentiality of your
                  account and password, and you accept responsibility for all
                  activities that occur under your account. If you believe that
                  your account is no longer secure, then you should immediately
                  notify us at&nbsp;
                  <Link
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-gray-900 underline"
                  >
                    {CONTACT_EMAIL}
                  </Link>
                  .
                </li>

                <li className="space-y-4">
                  <strong className="text-gray-900">
                    General Payment Terms
                  </strong>
                  . Certain features of the Service may require you to pay fees.
                  Before you pay any fees, you will have an opportunity to
                  review and accept the fees that you will be charged. Unless
                  otherwise specifically provided for in these Terms, all fees
                  are in U.S. Dollars and are non-refundable, except as required
                  by law. The pricing and payment terms in this Section 4 are
                  subject to any pricing and payment terms set forth in an Order
                  Form.
                  <ol className="list-decimal space-y-4 pl-8">
                    <li>
                      <p>
                        <strong className="text-gray-900">Price</strong>. PearAI
                        reserves the right to determine pricing for the Service.
                        PearAI will make reasonable efforts to keep pricing
                        information published on the Service up to date. We
                        encourage you to check our pricing page periodically for
                        current pricing information. PearAI may change the fees
                        for any feature of the Service, including additional
                        fees or charges, if PearAI gives you advance notice of
                        changes before they apply through the Service user
                        interface, a pop-up notice, email, or through other
                        reasonable means. Your continued use of the Service
                        after the price change becomes effective constitutes
                        your agreement to pay the changed amount. You will be
                        responsible for all taxes associated with the Service,
                        other than taxes based on PearAI’s net income. PearAI,
                        at its sole discretion, may make promotional offers with
                        different features and different pricing to any of
                        PearAI’s customers. These promotional offers, unless
                        made to you, will not apply to your offer or these
                        Terms.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Payment Processing
                        </strong>
                        . Notwithstanding any amounts owed to PearAI hereunder,
                        PEARAI DOES NOT DIRECTLY PROCESS PAYMENT FOR ANY
                        SERVICES. To facilitate payment for the Service via bank
                        account, credit card, or debit card, we use Stripe, Inc.
                        and its affiliates (“
                        <strong className="text-gray-900">Stripe</strong>
                        ”), a third-party payment processor. These payment
                        processing services are provided by Stripe and are
                        subject to&nbsp;the&nbsp;Stripe terms and conditions and
                        other policies available at{" "}
                        <Link
                          href="https://stripe.com/legal"
                          className="font-medium text-gray-900 underline"
                        >
                          https://stripe.com/legal
                        </Link>{" "}
                        and Stripe&apos;s Global Privacy Policy available at:{" "}
                        <Link
                          href="https://stripe.com/privacy"
                          className="font-medium text-gray-900 underline"
                        >
                          https://stripe.com/privacy
                        </Link>{" "}
                        (collectively, the &quot;
                        <strong className="text-gray-900">
                          Stripe Agreements
                        </strong>
                        &quot;). By agreeing to these Terms, users that use the
                        payment functions of the Service also agree to be bound
                        by the Stripe Agreements, as the same may be modified by
                        Stripe from time to time. You hereby authorize Stripe to
                        store and continue billing your specified payment method
                        even after such payment method has expired, to avoid
                        interruptions in payment for your use of the Service.
                        Please contact Stripe for more information. PearAI
                        assumes no liability or responsibility for any payments
                        you make through the Service.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Subscription Service
                        </strong>
                        . The Service may include certain subscription-based
                        plans with automatically recurring payments for periodic
                        charges (“
                        <strong className="text-gray-900">
                          Subscription Service
                        </strong>
                        ”). The “
                        <strong className="text-gray-900">
                          Subscription Billing Date
                        </strong>
                        ” is the date when you purchase your first subscription
                        to the Service. The Subscription Service will begin on
                        the Subscription Billing Date and continue for the
                        subscription period that you select on your account
                        (such period, the “
                        <strong className="text-gray-900">
                          Initial Subscription Period
                        </strong>
                        ”), and will automatically renew for successive periods
                        of the same duration as the Initial Subscription Period
                        (the Initial Subscription Period and each such renewal
                        period, each a “
                        <strong className="text-gray-900">
                          Subscription Period
                        </strong>
                        ”) unless you cancel the Subscription Service or we
                        terminate it. If you activate a Subscription Service,
                        then you authorize PearAI or its third-party payment
                        processors to periodically charge, on a going-forward
                        basis and until cancellation of the Subscription
                        Service, all accrued sums on or before the payment due
                        date. For information on the “
                        <strong className="text-gray-900">
                          Subscription Fee
                        </strong>
                        ”, please see our pricing page. Your account will be
                        charged automatically on the Subscription Billing Date
                        and thereafter on the renewal date of your Subscription
                        Service for all applicable fees and taxes for the next
                        Subscription Period. You must cancel your Subscription
                        Service before it renews in order to avoid billing of
                        the next periodic Subscription Fee to your account.
                        PearAI or its third-party payment processor will bill
                        the periodic Subscription Fee to the payment method
                        associated with your account or that you otherwise
                        provide to us. You may cancel the Subscription Service
                        by using the cancellation functionality made available
                        in your billing menu or by contacting us at&nbsp;
                        <Link
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="font-medium text-gray-900 underline"
                        >
                          {CONTACT_EMAIL}
                        </Link>
                        . YOUR CANCELLATION MUST BE RECEIVED BEFORE THE RENEWAL
                        DATE IN ORDER TO AVOID CHARGE FOR THE NEXT SUBSCRIPTION
                        PERIOD.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Delinquent Accounts
                        </strong>
                        . PearAI may suspend or terminate access to the Service,
                        including fee-based portions of the Service, for any
                        account for which any amount is due but unpaid. In
                        addition to the amount due for the Service, a delinquent
                        account will be charged with fees or charges that are
                        incidental to any chargeback or collection of any unpaid
                        amount, including collection fees. If your payment
                        method is no longer valid at the time a renewal
                        Subscription Fee is due, then PearAI reserves the right
                        to delete your account and any information associated
                        with your account without any liability to you.
                      </p>
                    </li>
                  </ol>
                </li>

                <li className="space-y-4">
                  <p>
                    <strong className="text-gray-900">
                      Customer and Usage Data
                    </strong>
                  </p>
                  <ol className="list-decimal space-y-4 pl-8">
                    <li>
                      <p>
                        <strong className="text-gray-900">Customer Data</strong>
                        . Any data, text, and any other works of authorship or
                        other works, including source code (collectively, “
                        <strong className="text-gray-900">Customer Data</strong>
                        ”) that you submit, upload, or otherwise post to or
                        transmit (such actions, collectively, “Upload”) to the
                        Service are only used to provide Suggestions to you
                        unless you opt-in to allow PearAI to use such Customer
                        Data to improve and enhance the Service and for other
                        development, diagnostic and corrective purposes in
                        connection with the Service and other PearAI offerings.
                        Customer Data is transmitted only to generate
                        Suggestions in real-time and are deleted once
                        Suggestions are generated. Customer Data is not used for
                        any other purpose, including the training of language
                        models. Customer Data is encrypted during transit and is
                        not stored at rest.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">Usage Data</strong>.
                        PearAI may collect, generate, and derive performance,
                        analytical, or usage data relating to your access to or
                        use of the Service (“
                        <strong className="text-gray-900">Usage Data</strong>
                        ”). Usage Data will not include any Customer Data.
                        PearAI will only use Usage Data to provide the Service
                        to you, to monitor the performance and stability of the
                        Service, and to prevent or address technical issues with
                        the Service. PearAI may also anonymize Usage Data,
                        aggregate it with other data, and use that aggregated,
                        anonymized data to improve its products and services.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong className="text-gray-900">
                    Third-Party Software
                  </strong>
                  . The Service may include or incorporate third-party software
                  components that are generally available free of charge under
                  licenses granting recipients broad rights to copy, modify, and
                  distribute those components (“
                  <strong className="text-gray-900">
                    Third-Party Components
                  </strong>
                  ”). Although the Service is provided to you subject to these
                  Terms, nothing in these Terms prevents, restricts, or is
                  intended to prevent or restrict you from obtaining Third-Party
                  Components under the applicable third-party licenses or to
                  limit your use of Third-Party Components under those
                  third-party licenses.
                </li>

                <li>
                  <p>
                    <strong className="text-gray-900">
                      Communications; Email
                    </strong>
                    . We may send you emails concerning our products and
                    services, as well as those of third parties. You may opt out
                    of promotional emails by following the unsubscribe
                    instructions in the promotional email itself.
                  </p>
                </li>

                <li>
                  <p>
                    <strong className="text-gray-900">
                      Modification of Terms
                    </strong>
                    . We may, from time to time, change these Terms. Please
                    check these Terms periodically for changes. If we make any
                    material modifications, we will notify you by updating the
                    date at the top of these Terms and by maintaining a current
                    version of these Terms at{" "}
                    <Link
                      href="https://trypear.ai/terms-of-service"
                      className="font-medium text-gray-900 underline"
                    >
                      https://trypear.ai/terms-of-service
                    </Link>
                    . All modifications will be effective when they are posted,
                    and your continued accessing or use of the Service will
                    serve as confirmation of your acceptance of those
                    modifications. If you do not agree to the modified Terms,
                    then you should discontinue your use of the Service.
                  </p>
                </li>

                <li className="space-y-4">
                  <p>
                    <strong className="text-gray-900">
                      Term, Termination, and Modification of the Service
                    </strong>
                  </p>

                  <ol className="list-decimal space-y-4 pl-8">
                    <li>
                      <p>
                        <strong className="text-gray-900">Term</strong>. These
                        Terms are effective beginning when you accept the Terms
                        or first download, install, access, or use the Service,
                        and ending on the earlier of: (i) the effective date of
                        termination by either party in accordance with these
                        Terms, including when terminated as described in Section
                        11.2, or (ii) when no Order Form remains in effect, if
                        you and PearAI had previously executed an Order Form.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">Termination</strong>.
                        If you violate any provision of these Terms, then your
                        authorization to access the Service and these Terms
                        automatically terminate. In addition, PearAI may, at its
                        sole discretion, terminate these Terms or your account
                        on the Service, or suspend or terminate your access to
                        the Service, at any time for any reason or no reason,
                        with or without notice, and without any liability to you
                        arising from such termination. If you are using the
                        Services under a free or trial account, you may
                        terminate your use of the Services at any time by
                        deleting your account. If you have purchased a paid
                        subscription for the Services, you may only terminate
                        your account following conclusion of your applicable
                        subscription period by providing us with notice of
                        cancellation before the end of your then-current
                        subscription term.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Effect of Termination
                        </strong>
                        . Upon termination of these Terms: (a) your license
                        rights will terminate and you must immediately cease all
                        use of the Service; (b) you will no longer be authorized
                        to access your account or the Service; (c) you must pay
                        PearAI any unpaid amount that was due prior to
                        termination; and (d) all payment obligations accrued
                        prior to termination and Sections 5.3 (Feedback), 6
                        (Ownership; Proprietary Rights), 11.3 (Effect of
                        Termination), 12 (Indemnity), 13 (Disclaimers; No
                        Warranties by PearAI), 14 (Limitation of Liability), 15
                        (Dispute Resolution and Arbitration), and 16
                        (Miscellaneous) will survive. You are solely responsible
                        for retaining copies of any content you upload to the
                        Service, including Customer Data. Upon termination of
                        your account, you may lose access rights to any
                        information you provided to the Service. If your account
                        has been terminated for a breach of these Terms, then
                        you are prohibited from creating a new account on the
                        Service using a different name, email address or other
                        forms of account verification.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Modification of the Service
                        </strong>
                        . PearAI reserves the right to modify or discontinue all
                        or any portion of the Service at any time (including by
                        limiting or discontinuing certain features of the
                        Service), temporarily or permanently, without notice to
                        you. PearAI will have no liability for any change to the
                        Service, including any paid-for functionalities of the
                        Service, or any suspension or termination of your access
                        to or use of the Service. You should retain copies of
                        any User Content you Post to the Service so that you
                        have permanent copies in the event the Service is
                        modified in such a way that you lose access to User
                        Content you Posted to the Service.
                      </p>
                    </li>
                  </ol>
                </li>

                <li>
                  <p>
                    <strong className="text-gray-900">Indemnity</strong>. To the
                    fullest extent permitted by law, you are responsible for
                    your use of the Service, and you will defend and indemnify
                    PearAI, its affiliates and their respective shareholders,
                    directors, managers, members, officers, employees,
                    consultants, and agents (together, the “
                    <strong className="text-gray-900">PearAI Entities</strong>
                    ”) from and against every claim brought by a third party,
                    and any related liability, damage, loss, and expense,
                    including attorneys’ fees and costs, arising out of or
                    connected with: (1) your unauthorized use of, or misuse of,
                    the Service; (2) your violation of any portion of these
                    Terms, any representation, warranty, or agreement referenced
                    in these Terms, or any applicable law or regulation; (3)
                    your violation of any third-party right, including any
                    intellectual property right or publicity, confidentiality,
                    other property, or privacy right; or (4) any dispute or
                    issue between you and any third party. We reserve the right,
                    at our own expense, to assume the exclusive defense and
                    control of any matter otherwise subject to indemnification
                    by you (without limiting your indemnification obligations
                    with respect to that matter), and in that case, you agree to
                    cooperate with our defense of those claims.
                  </p>
                </li>

                <li className="space-y-4">
                  <p>
                    <strong className="text-gray-700">
                      Disclaimers; No Warranties by PearAI
                    </strong>
                  </p>

                  <ol className="list-decimal space-y-4 pl-8">
                    <li>
                      <p>
                        THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE
                        THROUGH THE SERVICE, INCLUDING SUGGESTIONS, ARE PROVIDED
                        “AS IS” AND ON AN “AS AVAILABLE” BASIS. PEARAI DISCLAIMS
                        ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
                        RELATING TO THE SERVICE AND ALL MATERIALS AND CONTENT
                        AVAILABLE THROUGH THE SERVICE, INCLUDING: (a) ANY
                        IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A
                        PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, OR
                        NON-INFRINGEMENT; AND (b) ANY WARRANTY ARISING OUT OF
                        COURSE OF DEALING, USAGE, OR TRADE. PEARAI DOES NOT
                        WARRANT THAT THE SERVICE OR ANY PORTION OF THE SERVICE,
                        OR ANY MATERIALS OR CONTENT OFFERED THROUGH THE SERVICE,
                        INCLUDING SUGGESTIONS, WILL BE UNINTERRUPTED, SECURE, OR
                        FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS,
                        AND PEARAI DOES NOT WARRANT THAT ANY OF THOSE ISSUES
                        WILL BE CORRECTED.
                      </p>
                    </li>

                    <li>
                      <p>
                        NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN,
                        OBTAINED BY YOU FROM THE SERVICE OR PEARAI ENTITIES OR
                        ANY MATERIALS OR CONTENT AVAILABLE THROUGH THE SERVICE,
                        INCLUDING SUGGESTIONS, WILL CREATE ANY WARRANTY
                        REGARDING ANY OF THE PEARAI ENTITIES OR THE SERVICE THAT
                        IS NOT EXPRESSLY STATED IN THESE TERMS. WE ARE NOT
                        RESPONSIBLE FOR ANY DAMAGE THAT MAY RESULT FROM THE
                        SERVICE AND YOUR DEALING WITH ANY OTHER SERVICE USER.
                        YOU UNDERSTAND AND AGREE THAT YOU USE ANY PORTION OF THE
                        SERVICE AT YOUR OWN DISCRETION AND RISK, AND THAT WE ARE
                        NOT RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY
                        (INCLUDING YOUR COMPUTER SYSTEM OR MOBILE DEVICE USED IN
                        CONNECTION WITH THE SERVICE) OR ANY LOSS OF DATA,
                        INCLUDING USER CONTENT.
                      </p>
                    </li>

                    <li>
                      <p>
                        THE LIMITATIONS, EXCLUSIONS AND DISCLAIMERS IN THIS
                        SECTION 13 APPLY TO THE FULLEST EXTENT PERMITTED BY LAW.
                        PearAI does not disclaim any warranty or other right
                        that PearAI is prohibited from disclaiming under
                        applicable law.
                      </p>
                    </li>
                  </ol>
                </li>

                <li className="space-y-4">
                  <p>
                    <strong className="text-gray-900">
                      Limitation of Liability
                    </strong>
                  </p>

                  <ol className="list-decimal space-y-4 pl-8">
                    <li>
                      <p>
                        TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL
                        THE PEARAI ENTITY BE LIABLE TO YOU FOR ANY INDIRECT,
                        INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES
                        (INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY
                        OTHER INTANGIBLE LOSS) ARISING OUT OF OR RELATING TO
                        YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR
                        USE, THE SERVICE OR ANY MATERIALS OR CONTENT ON THE
                        SERVICE, INCLUDING SUGGESTIONS, WHETHER BASED ON
                        WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE),
                        STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT
                        ANY PEARAI ENTITY HAS BEEN INFORMED OF THE POSSIBILITY
                        OF DAMAGE.
                      </p>
                    </li>

                    <li>
                      <p>
                        TO THE FULLEST EXTENT PERMITTED BY LAW, THE AGGREGATE
                        LIABILITY OF THE PEARAI ENTITIES TO YOU FOR ALL CLAIMS
                        ARISING OUT OF OR RELATING TO THE USE OF OR ANY
                        INABILITY TO USE ANY PORTION OF THE SERVICE OR OTHERWISE
                        UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR
                        OTHERWISE, IS LIMITED TO THE GREATER OF: (a) THE AMOUNT
                        YOU HAVE PAID TO PEARAI FOR ACCESS TO AND USE OF THE
                        SERVICE IN THE 6 MONTHS PRIOR TO THE EVENT OR
                        CIRCUMSTANCE GIVING RISE TO THE CLAIM OR, IF GREATER,
                        (b) USD 100.
                      </p>
                    </li>

                    <li>
                      <p>
                        EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A
                        LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR
                        EXCLUSION OF DAMAGES IS INTENDED TO AND DOES ALLOCATE
                        THE RISKS BETWEEN THE PARTIES UNDER THESE TERMS. THIS
                        ALLOCATION IS AN ESSENTIAL ELEMENT OF THE BASIS OF THE
                        BARGAIN BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS
                        SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS OF
                        THESE TERMS. THE LIMITATIONS IN THIS SECTION 14 WILL
                        APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL
                        PURPOSE.
                      </p>
                    </li>
                  </ol>
                </li>

                <li className="space-y-4">
                  <p>
                    <strong className="text-gray-900">
                      Dispute Resolution By Binding Arbitration
                    </strong>
                  </p>

                  <p>
                    <strong className="text-gray-900">
                      PLEASE READ THIS SECTION CAREFULLY AS IT AFFECTS YOUR
                      RIGHTS.
                    </strong>
                  </p>

                  <ol className="list-decimal space-y-4 pl-8">
                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Agreement to Arbitrate
                        </strong>
                        . This Dispute Resolution by Binding Arbitration section
                        is referred to in these Terms as the “
                        <strong className="text-gray-900">
                          Arbitration Agreement
                        </strong>
                        .” You agree that any and all disputes or claims that
                        have arisen or may arise between you and PearAI, whether
                        arising out of or relating to these Terms (including any
                        alleged breach thereof), the Service, any advertising,
                        or any aspect of the relationship or transactions
                        between us, will be resolved exclusively through final
                        and binding arbitration, rather than a court, in
                        accordance with the terms of this Arbitration Agreement,
                        except that you may assert individual claims in small
                        claims court, if your claims qualify. Further, this
                        Arbitration Agreement does not preclude you from
                        bringing issues to the attention of federal, state, or
                        local agencies, and such agencies can, if the law
                        allows, seek relief against us on your behalf. You agree
                        that, by entering into these Terms, you and PearAI are
                        each waiving the right to a trial by jury or to
                        participate in a class action. Your rights will be
                        determined by a neutral arbitrator, not a judge or jury.
                        The Federal Arbitration Act governs the interpretation
                        and enforcement of this Arbitration Agreement.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Prohibition of Class and Representative Actions and
                          Non-Individualized Relief
                        </strong>
                        . YOU AND PEARAI AGREE THAT EACH OF US MAY BRING CLAIMS
                        AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT AS
                        A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                        REPRESENTATIVE ACTION OR PROCEEDING. UNLESS BOTH YOU AND
                        PEARAI AGREE OTHERWISE, THE ARBITRATOR MAY NOT
                        CONSOLIDATE OR JOIN MORE THAN ONE PERSON’S OR PARTY’S
                        CLAIMS AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A
                        CONSOLIDATED, REPRESENTATIVE, OR CLASS PROCEEDING. ALSO,
                        THE ARBITRATOR MAY AWARD RELIEF (INCLUDING MONETARY,
                        INJUNCTIVE, AND DECLARATORY RELIEF) ONLY IN FAVOR OF THE
                        INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT
                        NECESSARY TO PROVIDE RELIEF NECESSITATED BY THAT PARTY’S
                        INDIVIDUAL CLAIM(S), EXCEPT THAT YOU MAY PURSUE A CLAIM
                        FOR AND THE ARBITRATOR MAY AWARD PUBLIC INJUNCTIVE
                        RELIEF UNDER APPLICABLE LAW TO THE EXTENT REQUIRED FOR
                        THE ENFORCEABILITY OF THIS PROVISION.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Pre-Arbitration Dispute Resolution
                        </strong>
                        . PearAI is always interested in resolving disputes
                        amicably and efficiently, and most customer concerns can
                        be resolved quickly and to the customer’s satisfaction
                        by emailing customer support at&nbsp;
                        <Link
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="font-medium text-gray-900 underline"
                        >
                          {CONTACT_EMAIL}
                        </Link>
                        . If such efforts prove unsuccessful, a party who
                        intends to seek arbitration must first send to the
                        other, by certified mail, a written Notice of Dispute (“
                        <strong className="text-gray-900">Notice</strong>
                        ”). The Notice to PearAI should be sent to (“
                        <strong className="text-gray-900">
                          Notice Address
                        </strong>
                        ”). The Notice must (i) describe the nature and basis of
                        the claim or dispute and (ii) set forth the specific
                        relief sought. If PearAI and you do not resolve the
                        claim within sixty (60) calendar days after the Notice
                        is received, you or PearAI may commence an arbitration
                        proceeding. During the arbitration, the amount of any
                        settlement offer made by PearAI or you will not be
                        disclosed to the arbitrator until after the arbitrator
                        determines the amount, if any, to which you or PearAI is
                        entitled.
                      </p>
                    </li>

                    <li className="space-y-4">
                      <p>
                        <strong className="text-gray-900">
                          Arbitration Procedures
                        </strong>
                        . Arbitration will be conducted by a neutral arbitrator
                        in accordance with the American Arbitration
                        Association’s (“AAA”) rules and procedures, including
                        the AAA’s Consumer Arbitration Rules (collectively, the
                        “AAA Rules”), as modified by this Arbitration Agreement.
                        For information on the AAA, please visit its website,{" "}
                        <Link
                          href="https://www.adr.org"
                          className="font-medium text-gray-900 underline"
                        >
                          https://www.adr.org
                        </Link>
                        . Information about the AAA Rules and fees for consumer
                        disputes can be found at the AAA’s consumer arbitration
                        page,{" "}
                        <Link
                          href="https://www.adr.org/consumer"
                          className="font-medium text-gray-900 underline"
                        >
                          https://www.adr.org/consumer
                        </Link>
                        . If there is any inconsistency between any term of the
                        AAA Rules and any term of this Arbitration Agreement,
                        the applicable terms of this Arbitration Agreement will
                        control unless the arbitrator determines that the
                        application of the inconsistent Arbitration Agreement
                        terms would not result in a fundamentally fair
                        arbitration. The arbitrator must also follow the
                        provisions of these Terms as a court would. All issues
                        are for the arbitrator to decide, including issues
                        relating to the scope, enforceability, and arbitrability
                        of this Arbitration Agreement. Although arbitration
                        proceedings are usually simpler and more streamlined
                        than trials and other judicial proceedings, the
                        arbitrator can award the same damages and relief on an
                        individual basis that a court can award to an individual
                        under these Terms and applicable law. Decisions by the
                        arbitrator are enforceable in court and may be
                        overturned by a court only for very limited reasons.
                      </p>

                      <p>
                        Unless PearAI and you agree otherwise, any arbitration
                        hearings will take place in a reasonably convenient
                        location for both parties with due consideration of
                        their ability to travel and other pertinent
                        circumstances. If the parties are unable to agree on a
                        location, the determination will be made by AAA. If your
                        claim is for $10,000 or less, PearAI agrees that you may
                        choose whether the arbitration will be conducted solely
                        on the basis of documents submitted to the arbitrator,
                        through a telephonic hearing, or by an in-person hearing
                        as established by the AAA Rules. If your claim exceeds
                        $10,000, the right to a hearing will be determined by
                        the AAA Rules. Regardless of the manner in which the
                        arbitration is conducted, the arbitrator will issue a
                        reasoned written decision sufficient to explain the
                        essential findings and conclusions on which the award is
                        based.
                      </p>
                    </li>

                    <li className="space-y-4">
                      <p>
                        <strong className="text-gray-900">
                          Costs of Arbitration
                        </strong>
                        . Payment of all filing, administration, and arbitrator
                        fees (collectively, the “
                        <strong className="text-gray-900">
                          Arbitration Fees
                        </strong>
                        ”) will be governed by the AAA Rules, unless otherwise
                        provided in this Arbitration Agreement. To the extent
                        any Arbitration Fees are not specifically allocated to
                        either PearAI or you under the AAA Rules, PearAI and you
                        shall split them equally; provided that if you are able
                        to demonstrate to the arbitrator that you are
                        economically unable to pay your portion of such
                        Arbitration Fees or if the arbitrator otherwise
                        determines for any reason that you should not be
                        required to pay your portion of any Arbitration Fees,
                        PearAI will pay your portion of such fees. In addition,
                        if you demonstrate to the arbitrator that the costs of
                        arbitration will be prohibitive as compared to the costs
                        of litigation, PearAI will pay as much of the
                        Arbitration Fees as the arbitrator deems necessary to
                        prevent the arbitration from being cost-prohibitive. Any
                        payment of attorneys’ fees will be governed by the AAA
                        Rules.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Confidentiality
                        </strong>
                        . All aspects of the arbitration proceeding, and any
                        ruling, decision, or award by the arbitrator, will be
                        strictly confidential for the benefit of all parties.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">Severability</strong>.
                        If a court or the arbitrator decides that any term or
                        provision of this Arbitration Agreement (other than the
                        subsection (b) above titled “Prohibition of Class and
                        Representative Actions and Non-Individualized Relief”
                        above) is invalid or unenforceable, the parties agree to
                        replace such term or provision with a term or provision
                        that is valid and enforceable and that comes closest to
                        expressing the intention of the invalid or unenforceable
                        term or provision, and this Arbitration Agreement will
                        be enforceable as so modified. If a court or the
                        arbitrator decides that any of the provisions of
                        subsection (b) above titled “Prohibition of Class and
                        Representative Actions and Non-Individualized Relief”
                        are invalid or unenforceable, then the entirety of this
                        Arbitration Agreement will be null and void, unless such
                        provisions are deemed to be invalid or unenforceable
                        solely with respect to claims for public injunctive
                        relief. The remainder of these Terms will continue to
                        apply.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Future Changes to Arbitration Agreement
                        </strong>{" "}
                        Notwithstanding any provision in these Terms to the
                        contrary, PearAI agrees that if it makes any future
                        change to this Arbitration Agreement (other than a
                        change to the Notice Address) while you are a user of
                        the Service, you may reject any such change by sending
                        PearAI written notice within thirty (30) calendar days
                        of the change to the Notice Address provided above. By
                        rejecting any future change, you are agreeing that you
                        will arbitrate any dispute between us in accordance with
                        the language of this Arbitration Agreement as of the
                        date you first accepted these Terms (or accepted any
                        subsequent changes to these Terms).
                      </p>
                    </li>
                  </ol>
                </li>

                <li className="space-y-4">
                  <p>
                    <strong className="text-gray-900">Miscellaneous</strong>
                  </p>

                  <ol className="list-decimal space-y-4 pl-8">
                    <li>
                      <p>
                        <strong className="text-gray-900">General Terms</strong>
                        . These Terms, including the Privacy Policy, and any
                        other agreements expressly incorporated by reference
                        into these Terms, are the entire and exclusive
                        understanding and agreement between you and PearAI
                        regarding your use of the Service. You may not assign or
                        transfer these Terms or your rights under these Terms,
                        in whole or in part, by operation of law or otherwise,
                        without our prior written consent. We may assign these
                        Terms and all rights granted under these Terms,
                        including with respect to your User Content, at any time
                        without notice or consent. The failure to require
                        performance of any provision will not affect our right
                        to require performance at any other time after that, nor
                        will a waiver by us of any breach or default of these
                        Terms, or any provision of these Terms, be a waiver of
                        any subsequent breach or default or a waiver of the
                        provision itself. Use of Section headers in these Terms
                        is for convenience only and will not have any impact on
                        the interpretation of any provision. Throughout these
                        Terms the use of the word “including” means “including
                        but not limited to.” If any part of these Terms is held
                        to be invalid or unenforceable, then the unenforceable
                        part will be given effect to the greatest extent
                        possible, and the remaining parts will remain in full
                        force and effect.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">Governing Law</strong>
                        . These Terms are governed by the laws of the State of
                        California without regard to conflict of law principles.
                        All disputes and claims arising from these Terms will be
                        governed in accordance with the arbitration provisions
                        set forth above in Section 15; provided that you and
                        PearAI submit to the personal and exclusive jurisdiction
                        of the state courts and federal courts located within
                        Santa Clara County, California for (a) individuals
                        claims brought in small claims court, (b) claims for
                        injunctive or equitable relief, (c) claims involving
                        infringement or violation of intellectual property
                        rights, and (d) enforcement of any awards or relief
                        provided following arbitration. We operate the Service
                        from the United States, and we make no representation
                        that Materials included in the Service are appropriate
                        or available for use in other locations.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Privacy Policy
                        </strong>
                        . Please read the PearAI Privacy Policy (available
                        at:&nbsp;
                        <Link
                          href="https://trypear.ai/privacy"
                          className="font-medium text-gray-900 underline"
                        >
                          https://trypear.ai/privacy
                        </Link>
                        ) (the “Privacy Policy”) carefully for information
                        relating to our collection, use, storage, and disclosure
                        of your personal information. The PearAI Privacy Policy
                        is incorporated by this reference into, and made a part
                        of, these Terms.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Consent to Electronic Communications
                        </strong>
                        . By using the Service, you consent to receiving certain
                        electronic communications from us as further described
                        in our Privacy Policy. Please read our Privacy Policy to
                        learn more about our electronic communications
                        practices. You agree that any notices, agreements,
                        disclosures, or other communications that we send to you
                        electronically will satisfy any legal communication
                        requirements, including that those communications be in
                        writing.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Contact Information
                        </strong>
                        . The Service is offered by PearAI, Inc., located at 54
                        State Street, Ste 804 Albany NY 12207. You may contact
                        us by sending correspondence to that address or by
                        emailing us at&nbsp;
                        <Link
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="font-medium text-gray-900 underline"
                        >
                          {CONTACT_EMAIL}
                        </Link>
                        .
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          Notice to California Residents
                        </strong>
                        . If you are a California resident, then under
                        California Civil Code Section 1789.3, you may contact
                        the Complaint Assistance Unit of the Division of
                        Consumer Services of the California Department of
                        Consumer Affairs in writing at 1625 N. Market Blvd.,
                        Suite S-202, Sacramento, California 95834, or by
                        telephone at +1-800-952-5210 in order to resolve a
                        complaint regarding the Service or to receive further
                        information regarding use of the Service.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">No Support</strong>.
                        We are under no obligation to provide support for the
                        Service. In instances where we may offer support, the
                        support will be subject to published policies.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">
                          International Use
                        </strong>
                        . The Service is intended for visitors located within
                        the United States. We make no representation that the
                        Service is appropriate or available for use outside of
                        the United States. Access to the Service from countries
                        or territories or by individuals where such access is
                        illegal is prohibited.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong className="text-gray-900">Features</strong>. The
                        Service is a fork of VSCode, but does not promise that
                        all existing features of VSCode will be present. For
                        example, certain extensions, such as WSL for Windows, is
                        currently not supported.
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
