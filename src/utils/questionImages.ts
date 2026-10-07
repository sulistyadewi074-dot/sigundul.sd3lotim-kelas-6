/**
 * Question Images Registry
 * Maps each IPAS question to its dedicated educational illustration.
 */

import soal1Img from '../assets/images/soal_karbon_monoksida_1791372852466.jpg';
import soal2Img from '../assets/images/soal_ispa_polusi_1791372870566.jpg';
import soal3Img from '../assets/images/soal_kabut_asap_1791372907719.jpg';
import soal4Img from '../assets/images/soal_ventilasi_kotor_1791372930160.jpg';
import soal5Img from '../assets/images/soal_tbc_bakteri_1791372947724.jpg';
import soal6Img from '../assets/images/soal_pneumonia_alveoli_1791372964964.jpg';
import soal7Img from '../assets/images/soal_bronkitis_saluran_1791372999017.jpg';
import soal8Img from '../assets/images/soal_flu_droplet_1791373020836.jpg';
import soal9Img from '../assets/images/soal_tar_paru_1791373040841.jpg';
import soal10Img from '../assets/images/soal_silia_rusak_1791373062227.jpg';
import soal11Img from '../assets/images/soal_perokok_pasif_1791373078417.jpg';
import soal12Img from '../assets/images/soal_kanker_paru_1791373105511.jpg';
import soal13Img from '../assets/images/soal_asma_mengi_1791373127896.jpg';
import soal14Img from '../assets/images/soal_emfisema_alveolus_1791373146373.jpg';
import soal15Img from '../assets/images/soal_polip_amandel_1791373163642.jpg';
import soal16Img from '../assets/images/soal_faringitis_radang_1791373177497.jpg';
import soal17Img from '../assets/images/soal_masker_lindung_1791373191059.jpg';
import soal18Img from '../assets/images/soal_etika_batuk_1791373211660.jpg';
import soal19Img from '../assets/images/soal_vaksin_bcg_1791373232674.jpg';
import soal20Img from '../assets/images/soal_pohon_oksigen_1791373257822.jpg';

export const QUESTION_IMAGES: Record<string, string> = {
  // Pos 1
  q_pos_1_1: soal1Img,
  q_pos_1_2: soal2Img,
  q_pos_1_3: soal3Img,
  q_pos_1_4: soal4Img,

  // Pos 2
  q_pos_2_1: soal5Img,
  q_pos_2_2: soal6Img,
  q_pos_2_3: soal7Img,
  q_pos_2_4: soal8Img,

  // Pos 3
  q_pos_3_1: soal9Img,
  q_pos_3_2: soal10Img,
  q_pos_3_3: soal11Img,
  q_pos_3_4: soal12Img,

  // Pos 4
  q_pos_4_1: soal13Img,
  q_pos_4_2: soal14Img,
  q_pos_4_3: soal15Img,
  q_pos_4_4: soal16Img,

  // Pos 5
  q_pos_5_1: soal17Img,
  q_pos_5_2: soal18Img,
  q_pos_5_3: soal19Img,
  q_pos_5_4: soal20Img,
};

export function getQuestionImage(questionId: string, fallbackUrl?: string): string | undefined {
  return QUESTION_IMAGES[questionId] || fallbackUrl;
}
