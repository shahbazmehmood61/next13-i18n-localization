import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { langs } from "@/utils/langs";

export default () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = React.useState("en");
  const [selectedLang, setSelectedLang] = React.useState("English");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  React.useEffect(() => {
    const lang = pathname?.split("/").at(1);
    const currentLang = langs.find((l) => l.lang === lang);

    if (currentLang) {
      setCurrentLang(currentLang.lang);
      setSelectedLang(currentLang.fullName);
    }

    if (!currentLang) {
      setCurrentLang("en");
      setSelectedLang("English");
    }
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLangChange({ lang, fullName }: { lang: string; fullName: string }) {
    const language = lang ? "/" + lang : "/en";

    router.push(`${language}`);

    setSelectedLang(fullName);
    handleClose();
  }

  return (
    <AppBar className=" px-4 sm:px-16 md:px-24" position="static" sx={{ height: "50px" }}>
      <Toolbar disableGutters sx={{ "&.MuiToolbar-root": { minHeight: "50px", height: "50px" } }}>
        <div className=" flex flex-row justify-between w-full items-center">
          <Link href="/">
            <div className="flex flex-row">
              <Typography sx={{ color: "#fff" }}>LOGO</Typography>
            </div>
          </Link>
          <div className="w-[140px] sm:w-[250px] flex flex-row justify-between items-center">
            <div>
              <Button
                size="small"
                aria-label="change lang button"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                style={{ color: "#fff" }}
                color="inherit"
              >
                {selectedLang}
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                aria-label="Languages list"
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {langs.map((lang) => (
                  <MenuItem
                    key={lang.lang}
                    selected={currentLang === lang.lang}
                    onClick={() => handleLangChange(lang)}
                  >
                    {lang.fullName}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};