import { Accordion, Affix, Avatar, BackgroundImage, Box, Button, ColorSwatch, Group, Image, ScrollArea, SimpleGrid, Stack, Stepper, Tabs, Text, Textarea, TextInput, ThemeIcon, Transition } from "@mantine/core";
import { useWindowScroll } from '@mantine/hooks';
import { ArrowBigTop } from 'tabler-icons-react';
import { Marquee } from "../public/components/Marquee";

const titlesMarquee = {
  "en-US": "Welcome",
  "vi-VN": "Chào mừng",
  "zh-CN": "欢迎",
  "zh-TW": "歡迎",
  "ja-JP": "ようこそ",
  "ko-KR": "환영합니다",
  "ru-RU": "Добро пожаловать",
  "fr-FR": "Bienvenue",
  "es-ES": "Bienvenido",
  "de-DE": "Willkommen",
  "it-IT": "Benvenuto",
  "pt-BR": "Bem-vindo",
  "pt-PT": "Bem-vindo",
  "da-DK": "Velkommen",
  "nl-NL": "Welkom",
  "nb-NO": "Velkommen",
  "sv-SE": "Välkommen",
  "fi-FI": "Tervetuloa",
  "pl-PL": "Witamy",
  "cs-CZ": "Vítejte",
  "tr-TR": "Hoş geldiniz",
  "ar-SA": "مرحبا",
  "he-IL": "ברוכים הבאים",
  "id-ID": "Selamat datang",
  "th-TH": "ยินดีต้อนรับ",
}

export default function Web() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Box sx={{
      background: "#000",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    }}>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              sx={{
                boxShadow: "#000 0px 0px 0px 2px inset, #e3e5ff 5px -5px 0px -3px, #000 5px -5px"
              }}
              leftIcon={<ArrowBigTop />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              variant="outline" color="dark"
              radius="xs"
              uppercase
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
      <Marquee gradient={false} style={{ color: "#fff" }}>
        {titlesMarquee && Object.values(titlesMarquee).map((title, index) => (
          <Text
            key={index}
            sx={{
              marginLeft: 12,
            }}
          >
            {title}
          </Text>
        ))}
      </Marquee>
      <BackgroundImage
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundSize: "500px",
          backgroundColor: "#466eef",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "3px solid #000",
          position: "relative",
          zIndex: 5,
        }}
        radius={0}
        src={`assets/images/GRID.svg`}
        pb={"xl"}
      >
        <Stack sx={{
          width: "75%",
          paddingTop: "40px"
        }} spacing="xl">
          <Box sx={{
            background: "#fff",
            width: "100%",
            height: "500px",
            border: "2px solid #000",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "#000 0px 0px 0px 2px inset, #e3e5ff 10px -10px 0px -3px, #000 10px -10px"
          }}>
            <Text
              sx={{
                userSelect: "none",
                fontSize: 72,
                fontWeight: "bold",
                margin: "0 auto",
                textAlign: "center",
              }}
              transform="uppercase"
            >
              Nguyen Hai Nam
            </Text>
            <Text
              sx={{
                userSelect: "none",
                fontSize: 36,
                fontWeight: "bold",
                margin: "0 auto",
                textAlign: "center",
              }}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            >
              #Developer
            </Text>
            <Button sx={{
              border: "3px solid #000",
            }} variant="outline" color="dark" radius="xs" size="xl" uppercase>
              Get Started
            </Button>
          </Box>
          <Group sx={{
            height: "500px",
          }} grow spacing="xl">
            <Group sx={{
              height: "100%",
            }} grow direction="column">
              <Box sx={{
                background: "#fff",
                width: "100%",
                border: "2px solid #000",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "#000 0px 0px 0px 2px inset, #e3e5ff 10px -10px 0px -3px, #000 10px -10px"
              }}>
                <Text
                  sx={{
                    userSelect: "none",
                    fontSize: 72,
                    fontWeight: "bold",
                  }}
                >
                  Team<br />
                  Check-in
                </Text>
              </Box>
              <Box sx={{
                background: "#fff",
                width: "100%",
                border: "2px solid #000",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "#000 0px 0px 0px 2px inset, #e3e5ff 10px -10px 0px -3px, #000 10px -10px"
              }}>
                <Stepper orientation="vertical">
                  <Stepper.Step label="Step 1" description="Create an account" />
                  <Stepper.Step label="Step 2" description="Verify email" />
                  <Stepper.Step label="Step 3" description="Get full access" />
                </Stepper>
              </Box>
            </Group>
            <Group sx={{
              height: "100%",
            }} grow direction="column">
              <Box sx={{
                background: "#fff",
                width: "100%",
                border: "2px solid #000",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: "#000 0px 0px 0px 2px inset, #e3e5ff 10px -10px 0px -3px, #000 10px -10px"
              }}>
                <Box sx={{
                  height: 24,
                  background: "#000",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }} p="xs">
                  <Group spacing={4}>
                    <ColorSwatch color={"#FC5753"} size={12} />
                    <ColorSwatch color={"#FDBC40"} size={12} />
                    <ColorSwatch color={"#33C748"} size={12} />
                  </Group>
                </Box>
              </Box>
            </Group>
          </Group>
          <Box sx={{
            position: "relative",
            height: "720px",
          }}>
            <Box
              sx={{
                position: "absolute",
                left: "-50px",
                top: "0",
                transform: "rotate(-25deg)",
                width: "200px",
                height: "200px",
                background: "#FDF4A7",
                filter: "drop-shadow(-1px 6px 5px rgba(50, 50, 0))",
                clipPath: "polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0)",
              }}
              p="xl"
            // data-speed="2"
            // className="move"
            >
              Bring world aaaaaaaaa aaaaaaaaaaaaa  a
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: "150px",
                top: "250px",
                transform: "rotate(15deg)",
                width: "200px",
                height: "200px",
                background: "#C8F2FF",
                filter: "drop-shadow(-1px 6px 5px rgba(50, 50, 0))",
                clipPath: "polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0)",
              }}
              p="xl"
            >
              Bring world aaaaaaaaa aaaaaaaaaaaaa  a
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: "350px",
                top: "500px",
                transform: "rotate(-10deg)",
                width: "200px",
                height: "200px",
                background: "#FF8A8C",
                filter: "drop-shadow(-1px 6px 5px rgba(50, 50, 0))",
                clipPath: "polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0)",
              }}
              p="xl"
            >
              Bring world aaaaaaaaa aaaaaaaaaaaaa  a
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: "0px",
                top: "500px",
                transform: "rotate(5deg)",
                width: "200px",
                height: "200px",
                background: "#E0C0EC",
                filter: "drop-shadow(-1px 6px 5px rgba(50, 50, 0))",
                clipPath: "polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0)",
              }}
              p="xl"
            >
              Bring world aaaaaaaaa aaaaaaaaaaaaa  a
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: "50px",
                transform: "rotate(-10deg) translateX(-50%)",
                width: "200px",
                height: "200px",
                background: "#FFE6C8",
                filter: "drop-shadow(-1px 6px 5px rgba(50, 50, 0))",
                clipPath: "polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0)",
              }}
              p="xl"
            >
              Bring world aaaaaaaaa aaaaaaaaaaaaa  a
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: "250px",
                top: "350px",
                transform: "rotate(25deg)",
                width: "200px",
                height: "200px",
                background: "#E0FFC8",
                filter: "drop-shadow(-1px 6px 5px rgba(50, 50, 0))",
                clipPath: "polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0)",
              }}
              p="xl"
            >
              Bring world aaaaaaaaa aaaaaaaaaaaaa  a
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: "-50px",
                top: "500px",
                transform: "rotate(-10deg)",
                width: "200px",
                height: "200px",
                background: "#FFFFFF",
                filter: "drop-shadow(-1px 6px 5px rgba(50, 50, 0))",
                clipPath: "polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0)",
              }}
              p="xl"
            >
              Bring world aaaaaaaaa aaaaaaaaaaaaa  a
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: "-50px",
                top: "50px",
                transform: "rotate(15deg)",
                width: "200px",
                height: "200px",
                background: "#FFC8C8",
                filter: "drop-shadow(-1px 6px 5px rgba(50, 50, 0))",
                clipPath: "polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0)",
              }}
              p="xl"
            >
              Bring world aaaaaaaaa aaaaaaaaaaaaa  a
            </Box>
          </Box>
          <Box sx={{
            background: "#fff",
            width: "100%",
            // height: "700px",
            border: "2px solid #000",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            boxShadow: "#000 0px 0px 0px 2px inset, #e3e5ff 10px -10px 0px -3px, #000 10px -10px"
          }}>
            <Box sx={{
              height: 24,
              background: "#000",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }} p="xs">
              <Group spacing={4}>
                <ColorSwatch color={"#FC5753"} size={12} />
                <ColorSwatch color={"#FDBC40"} size={12} />
                <ColorSwatch color={"#33C748"} size={12} />
              </Group>
            </Box>
            <Box sx={{
              position: "relative",
            }}>
              <BackgroundImage
                sx={{
                  width: "calc(100% - 4px)",
                  margin: "auto",
                  height: "250px",
                  overflow: "hidden",
                  backgroundColor: "#466eef",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                radius={0}
                src={`assets/images/GRID.svg`}
              ></BackgroundImage>
              <Avatar sx={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                position: "absolute",
                border: "5px solid #fff",
                borderRadius: "50%",
              }} size={120} src={"https://anytype.io/images/avatar-1.png"} alt="no image here" color="indigo" />
            </Box>
            <ScrollArea style={{ height: 500 }}>
              <SimpleGrid cols={5} p="xl" breakpoints={[
                { maxWidth: 1450, cols: 4 },
                { maxWidth: 1100, cols: 3 },
                { maxWidth: 900, cols: 2 },
                { maxWidth: 600, cols: 1 },
              ]}>
                <Box sx={{
                  background: "#fff",
                  width: "200px",
                  height: "200px",
                  border: "2px solid #000",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "#000 0px 0px 0px 2px inset, #000 5px -5px"
                }}
                  p="xl"
                >
                  {/* <Avatar src={null} alt="no image here" color="indigo">
                    <Image
                      radius="md"
                      src="https://anytype.io/images/cards/1.png"
                      alt="Random unsplash image"
                      width={28}
                      height={28}
                    />
                  </Avatar> */}
                  <ThemeIcon sx={{
                    fontSize: 24,
                  }} variant="light" size="xl">
                    🗒
                  </ThemeIcon>
                  <Text size="xl" weight={700}>Note</Text>
                  Set
                </Box>
                <Box sx={{
                  background: "#fff",
                  width: "200px",
                  height: "200px",
                  border: "2px solid #000",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "#000 0px 0px 0px 2px inset, #000 5px -5px"
                }}
                  p="xl"
                >
                  <ThemeIcon sx={{
                    fontSize: 24,
                  }} variant="light" size="xl">
                    📷
                  </ThemeIcon>
                  <Text size="xl" weight={700}>Images</Text>
                </Box>
                <Box sx={{
                  background: "#fff",
                  width: "200px",
                  height: "200px",
                  border: "2px solid #000",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "#000 0px 0px 0px 2px inset, #000 5px -5px"
                }}
                  p="xl">
                  <ThemeIcon sx={{
                    fontSize: 24,
                  }} variant="light" size="xl">
                    🎥
                  </ThemeIcon>
                  <Text size="xl" weight={700}>Videos</Text>
                </Box>
                <Box sx={{
                  background: "#fff",
                  width: "200px",
                  height: "200px",
                  border: "2px solid #000",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "#000 0px 0px 0px 2px inset, #000 5px -5px"
                }} p="xl">
                  <ThemeIcon sx={{
                    fontSize: 24,
                  }} variant="light" size="xl">
                    🔗
                  </ThemeIcon>
                  <Text size="xl" weight={700}>Videos</Text>
                </Box>
                <Box sx={{
                  background: "#fff",
                  width: "200px",
                  height: "200px",
                  border: "2px solid #000",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "#000 0px 0px 0px 2px inset, #000 5px -5px"
                }} p="xl">
                  <ThemeIcon sx={{
                    fontSize: 24,
                  }} variant="light" size="xl">
                    📅
                  </ThemeIcon>
                  <Text size="xl" weight={700}>Videos</Text>
                </Box>
                <Box sx={{
                  background: "#fff",
                  width: "200px",
                  height: "200px",
                  border: "2px solid #000",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "#000 0px 0px 0px 2px inset, #000 5px -5px"
                }} p="xl"
                >
                  <ThemeIcon sx={{
                    fontSize: 24,
                  }} variant="light" size="xl">
                    📌
                  </ThemeIcon>
                  <Text size="xl" weight={700}>Images</Text>
                </Box>
                <Box sx={{
                  background: "#fff",
                  width: "200px",
                  height: "200px",
                  border: "2px solid #000",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "#000 0px 0px 0px 2px inset, #000 5px -5px"
                }} p="xl"
                >
                  <ThemeIcon sx={{
                    fontSize: 24,
                  }} variant="light" size="xl">
                    💰
                  </ThemeIcon>
                  <Text size="xl" weight={700}>Images</Text>
                </Box>
                <Box sx={{
                  background: "#fff",
                  width: "200px",
                  height: "200px",
                  border: "2px solid #000",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "#000 0px 0px 0px 2px inset, #000 5px -5px"
                }}>
                </Box>
                <Box sx={{
                  background: "#fff",
                  width: "200px",
                  height: "200px",
                  border: "2px solid #000",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "#000 0px 0px 0px 2px inset, #000 5px -5px"
                }}>
                </Box>
                <Box sx={{
                  background: "#fff",
                  width: "200px",
                  height: "200px",
                  border: "2px solid #000",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "#000 0px 0px 0px 2px inset, #000 5px -5px"
                }}>
                </Box>
              </SimpleGrid>
            </ScrollArea>
          </Box>
          <Tabs styles={{
            tabsList: {
              gap: 32,
            },
            tabLabel: {
              fontSize: 36,
              fontWeight: "bold",
            },
            body: {
              flex: 1,
            }
          }} color="dark" tabPadding="xl" orientation="vertical">
            <Tabs.Tab label="Team space">
              <Box sx={{
                background: "#fff",
                width: "100%",
                height: "100%",
                border: "2px solid #000",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: "#000 0px 0px 0px 2px inset, #e3e5ff 10px -10px 0px -3px, #000 10px -10px"
              }}>
                <Box sx={{
                  height: 24,
                  background: "#000",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }} p="xs">
                  <Group spacing={4}>
                    <ColorSwatch color={"#FC5753"} size={12} />
                    <ColorSwatch color={"#FDBC40"} size={12} />
                    <ColorSwatch color={"#33C748"} size={12} />
                  </Group>
                </Box>
                <Image src="https://anytype.io/images/tabs/contacts.jpg" />
              </Box>
            </Tabs.Tab>
            <Tabs.Tab label="Personal page">Personal page</Tabs.Tab>
            <Tabs.Tab label="Community home">Community home</Tabs.Tab>
            <Tabs.Tab label="Read it later">Read it later</Tabs.Tab>
            <Tabs.Tab label="Task management">Task management</Tabs.Tab>
            <Tabs.Tab label="File management">File management</Tabs.Tab>
            <Tabs.Tab label="Music collection">Music collection</Tabs.Tab>
            <Tabs.Tab label="Contacts manager">Contacts manager</Tabs.Tab>
          </Tabs>
          <Group grow spacing="xl">
            <Box sx={{
              background: "#fff",
              width: "100%",
              height: "100%",
              border: "2px solid #000",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              boxShadow: "#000 0px 0px 0px 2px inset, #e3e5ff 10px -10px 0px -3px, #000 10px -10px"
            }} p="xl">
              <ThemeIcon sx={{
                fontSize: 24,
              }} variant="light" size="xl">
                💻
              </ThemeIcon>
              <Text size="xl" weight={700}>Developer</Text>
              <Text sx={{
                fontSize: 32,
              }}>Contribute code and resources</Text>
            </Box>
            <Box sx={{
              background: "#fff",
              width: "100%",
              height: "100%",
              border: "2px solid #000",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              boxShadow: "#000 0px 0px 0px 2px inset, #e3e5ff 10px -10px 0px -3px, #000 10px -10px"
            }} p="xl">
              <ThemeIcon sx={{
                fontSize: 24,
              }} variant="light" size="xl">
                👋
              </ThemeIcon>
              <Text size="xl" weight={700}>User</Text>
              <Text sx={{
                fontSize: 32,
              }}>Sign up for early access</Text>
            </Box>
          </Group>
          <Text
            sx={{
              userSelect: "none",
              fontSize: 36,
              fontWeight: "bold",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            Register now for early access
          </Text>
          <TextInput
            styles={{
              input: {
                textAlign: "center",
                fontSize: 64,
                fontWeight: "bold",
                caretShape: "underscore",
                "&::selection":
                {
                  background: "#000",
                  color: "#fff",
                }
              }
            }}
            placeholder="Enter your email"
            variant="unstyled"
            radius="xl"
            size="xl"
          />
          <Box sx={{
            background: "#fff",
            width: "100%",
            height: "100%",
            border: "2px solid #000",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            boxShadow: "#000 0px 0px 0px 2px inset, #e3e5ff 10px -10px 0px -3px, #000 10px -10px"
          }} p="xl">
            <Accordion multiple>
              <Accordion.Item label="Customization">
                Colors, fonts, shadows and many other parts are customizable to fit your design needs
              </Accordion.Item>

              <Accordion.Item label="Flexibility">
                Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles
              </Accordion.Item>

              <Accordion.Item label="No annoying focus ring">
                With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
              </Accordion.Item>
            </Accordion>
          </Box>
          <Stack sx={{
            background: "#fff",
            width: "100%",
            border: "2px solid #000",
            boxShadow: "#000 0px 0px 0px 2px inset, #e3e5ff 10px -10px 0px -3px, #000 10px -10px"
          }} p="xl">
            <Text sx={{
              userSelect: "none",
              fontSize: 72,
              fontWeight: "bold",
              textAlign: "center",
            }}>
              CONTACT US:
            </Text>
            <Group grow>
              <Stack spacing={42}>
                <Text sx={{
                  fontSize: 36,
                  fontWeight: "bold",
                }}>
                  Contact information
                </Text>
                <Group>
                  <ThemeIcon sx={{
                    fontSize: 32,
                  }} variant="light" size={56}>
                    ✉
                  </ThemeIcon>
                  <Stack spacing={0}>
                    <Text size="xl" weight={500} transform="uppercase">Email</Text>
                    <Text color="dimmed" size="xl">Nghainam2000@gmail.com</Text>
                  </Stack>
                </Group>
                <Group>
                  <ThemeIcon sx={{
                    fontSize: 32,
                  }} variant="light" size={56}>
                    ☎
                  </ThemeIcon>
                  <Stack spacing={0}>
                    <Text size="xl" weight={500} transform="uppercase">Phone</Text>
                    <Text color="dimmed" size="xl">+84 964 321 028</Text>
                  </Stack>
                </Group>
                <Group>
                  <ThemeIcon sx={{
                    fontSize: 32,
                  }} variant="light" size={56}>
                    🗺
                  </ThemeIcon>
                  <Stack spacing={0}>
                    <Text size="xl" weight={500} transform="uppercase">Address</Text>
                    <Text color="dimmed" size="xl">Ha Noi, Viet Nam</Text>
                  </Stack>
                </Group>
                <Group>
                  <ThemeIcon sx={{
                    fontSize: 32,
                  }} variant="light" size={56}>
                    ☀
                  </ThemeIcon>
                  <Stack spacing={0}>
                    <Text size="xl" weight={500} transform="uppercase">Working Hours</Text>
                    <Text color="dimmed" size="xl">8 a.m - 11 p.m</Text>
                  </Stack>
                </Group>
              </Stack>
              <Box sx={{
                background: "#fff",
                border: "2px solid #000",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: "#000 0px 0px 0px 2px inset, #000 5px -5px"
              }} p="xl">
                <Text sx={{
                  fontSize: 36,
                  fontWeight: "bold",
                }}>
                  Get in touch
                </Text>
                <TextInput
                  styles={{
                    input: {
                      borderWidth: "3px",
                      borderColor: "#000",
                    }
                  }}
                  placeholder="EMAIL"
                  label="EMAIL"
                  radius="xs"
                  size="xl"
                  required
                />
                <TextInput
                  styles={{
                    input: {
                      borderWidth: "3px",
                      borderColor: "#000",
                    }
                  }}
                  placeholder="NAME"
                  label="NAME"
                  radius="xs"
                  size="xl"
                  required
                />
                <TextInput
                  styles={{
                    input: {
                      borderWidth: "3px",
                      borderColor: "#000",
                    }
                  }}
                  placeholder="PHONE"
                  label="PHONE"
                  radius="xs"
                  size="xl"
                  required
                />
                <Textarea
                  styles={{
                    input: {
                      borderWidth: "3px",
                      borderColor: "#000",
                    }
                  }}
                  placeholder="COMMENT"
                  label="COMMENT"
                  radius="xs"
                  size="xl"
                  required
                />
              </Box>
            </Group>
          </Stack>
        </Stack>
      </BackgroundImage >
      <Box sx={{
        height: 400,
      }}></Box>
      <Box sx={{
        height: 400,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        background: "#fff",
        zIndex: 1,
      }}></Box>
    </Box >
  );
}
