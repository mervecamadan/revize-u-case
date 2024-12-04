"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <div className="footerdiv-container py-16 max-w-[1440px] mx-auto">

            <div className="ilksutun-container">
                <div className="flex items-center gap-2">
                    <Image src="/logo_travlog.png" alt="Travlog" width={24} height={24} />
                    <p className="footerbaslik">Travlog</p>
                </div>
                <p className="footericerik">
                    Contrary to popular belief,<br></br> Lorem Ipsum is not simply<br></br> random text. It
                    has roots<br></br> in a piece of classical Latin<br></br> literature from 45 BC.
                </p>
                <div className="flex items-center gap-4">
                    <Link href="https://facebook.com">
                        <Image
                            src="/facebook.png"
                            alt="Facebook Logo"
                            width={20}
                            height={20}
                        />
                    </Link>
                    <Link href="https://twitter.com">
                        <Image
                            src="/twitter.png"
                            alt="Twitter Logo"
                            width={20}
                            height={20}
                        />
                    </Link>
                    <Link href="https://instagram.com">
                        <Image
                            src="/instagram.png"
                            alt="Instagram Logo"
                            width={20}
                            height={20}
                        />
                    </Link>
                </div>
            </div>

            <div className="digersutunlar-container">
                <div>
                    <p className="footerbaslik">Company</p>
                    <p className="footericerik">
                        <br></br>About <br></br><br /> Career <br></br><br /> Mobile
                    </p>
                </div>
                <div>
                    <p className="footerbaslik">Contact</p>
                    <p className="footericerik">
                        <br></br>Why Travlog? <br /> <br></br>Partner with us <br /> <br></br>FAQ’s <br /> <br></br>Blog
                    </p>
                </div>
                <div>
                    <p className="footerbaslik">Meet Us</p>
                    <p className="footericerik">
                        <br></br>+00 92 1234 56789 <br /> <br></br>info@travlog.com <br />
                        <br></br>205. R Street, New York <br></br>BD23200
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;