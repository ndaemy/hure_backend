import cryptoRandomString from 'crypto-random-string';
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config();

export const generateSecret = () => cryptoRandomString({ length: 10 });

export const sendSecretMail = (email, secret) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: 'admin@hure.com',
    subject: '한양대학교 부동산융합대학원 원우회 이메일 인증',
    html: `Your email confirmation key is <b>${secret}</b>.`
  };
  return sgMail.send(msg);
};

export const sendRequestConfirmedMail = email => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: 'admin@hure.com',
    subject: '한양대학교 부동산융합대학원 원우회 회원가입 완료',
    html: `회원가입이 완료되었습니다.`
  };
  return sgMail.send(msg);
};
