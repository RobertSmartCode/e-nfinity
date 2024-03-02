import React from "react";
import { Link } from "react-router-dom";
import { Grid, Hidden } from "@mui/material";

const HomeBanner: React.FC = () => {
  const bannerMobile = "https://firebasestorage.googleapis.com/v0/b/e-nfinity.appspot.com/o/LogoBanner%2FBannerMobile_800X500_.webp?alt=media&token=7cf81dc0-ec88-42af-9525-426d737e2c56";
  const bannerDesktop = "https://firebasestorage.googleapis.com/v0/b/e-nfinity.appspot.com/o/LogoBanner%2FBannerDesktop_1600X500_.webp?alt=media&token=9b6c95cd-1bfe-4828-a1e3-b271721f8688";

  return (
    <Grid container justifyContent="center" alignItems="center" marginTop="0px">
      <Grid item xs={12} lg={12}>
        <Hidden mdUp>
          {/* Se muestra en dispositivos móviles */}
          <Link to="/shop">
            <img
              src={bannerMobile}
              alt="Banner"
              style={{
                width: "100%", // Ajusta el ancho según tus necesidades
                height: "auto", // Ajusta la altura automáticamente
                cursor: "pointer", // Cambia el cursor al pasar el ratón
              }}
            />
          </Link>
        </Hidden>
        <Hidden mdDown>
          {/* Se muestra en dispositivos desktop */}
          <Link to="/shop">
            <img
              src={bannerDesktop}
              alt="Banner"
              style={{
                width: "100%", // Ajusta el ancho según tus necesidades
                height: "auto", // Ajusta la altura automáticamente
                cursor: "pointer", // Cambia el cursor al pasar el ratón
              }}
            />
          </Link>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default HomeBanner;
