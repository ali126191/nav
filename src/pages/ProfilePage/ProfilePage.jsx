import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        {/* <Header
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Christian Louboutin</h3>
                      <h6>DESIGNER</h6>
                      <Button justIcon link className={classes.margin5}>
                        <FaTwitter/>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <FaInstagram/>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <FaFacebook/>
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  An artist of considerable range, Chet Faker — the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure.{" "}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veniam enim ab corrupti laudantium illo, error voluptatum sunt odit, rem voluptatibus, dolorem dicta sed distinctio ullam dolores excepturi quae odio! Ipsum non, asperiores sed veniam impedit rerum quisquam ullam quaerat tenetur unde inventore itaque aliquid libero pariatur minus velit. Quo obcaecati eos nesciunt molestias corrupti molestiae tenetur aperiam maiores ea, dolorem assumenda magni. Aliquam eius aliquid omnis ab labore minus tenetur molestiae atque autem fugiat earum suscipit rerum consectetur delectus consequuntur, quas deleniti reprehenderit doloribus quae? Accusantium quae praesentium reiciendis vel consequuntur autem, pariatur sunt explicabo dolore obcaecati. Quod itaque obcaecati facere ratione. Ipsa labore, aliquid nobis obcaecati odio quae nemo optio mollitia vero consequuntur nulla voluptatum doloribus similique, eligendi, debitis ipsam magnam consequatur illo! Doloremque voluptate magnam mollitia? Impedit, explicabo. Necessitatibus at veniam, rem debitis amet libero aut distinctio earum eos quam dolorem dignissimos vitae reprehenderit inventore pariatur minima commodi fuga similique optio nostrum? Nemo cumque eligendi error tenetur culpa ad, facilis, nesciunt quas perferendis, voluptatum vel a praesentium illo sequi delectus aspernatur placeat debitis eveniet aut quam provident. Rerum, qui? Velit porro ipsam, vero quas odit quidem eius maiores perspiciatis molestias maxime at numquam corporis laboriosam aspernatur odio ab neque, assumenda incidunt, vitae facilis? Unde voluptatibus doloribus quod eius dicta impedit iste labore beatae ipsam facilis, dolorum ducimus quas quibusdam officiis ab eum natus porro quo tempora commodi tempore vitae ad magni enim? Nihil saepe eligendi esse facere minima possimus iure, reprehenderit architecto enim error, doloribus voluptate quaerat molestiae asperiores deleniti nulla quo omnis? Impedit ratione, dolores aut saepe labore quaerat sapiente sequi, fugiat aliquid autem earum ab error adipisci, incidunt id nulla consequuntur. Placeat inventore perspiciatis cum, ullam magni error veniam nulla dignissimos vero, consectetur optio natus incidunt laudantium nostrum obcaecati ea amet sit odit ab voluptatum aut! Eius vitae consectetur quae, amet necessitatibus numquam porro debitis. Perferendis maxime facilis praesentium, ullam libero a perspiciatis rem ex doloribus amet ducimus sint delectus vel quasi soluta neque veniam repellendus error. Commodi accusamus nemo laboriosam corporis animi ea voluptatum aliquid. Voluptates eos vitae asperiores fugit autem mollitia fugiat nemo aperiam dolorem, numquam molestias at temporibus. Ipsa, voluptatum facere, tempore, illo qui hic laboriosam odio deserunt placeat ea quis. Doloremque voluptatem, iure quae assumenda, voluptas perspiciatis necessitatibus, et at nam accusamus odit reprehenderit? Quidem nihil omnis necessitatibus autem possimus. Tenetur ipsa nisi incidunt nihil obcaecati dolorem consequatur odio perferendis magnam ea magni nemo quod ratione, eos qui eum eveniet. Animi amet nostrum eaque accusantium ipsa, minima mollitia architecto cumque, ex dicta earum, rerum totam unde dolorem fuga doloremque dolore repudiandae minus nobis consequuntur. Deserunt earum, maxime voluptates reprehenderit illum cumque quae non aut facere recusandae optio provident accusamus! Fugiat eveniet, nam velit minima veritatis fugit quos alias quibusdam molestiae? Alias incidunt error voluptas porro quibusdam sed fugit laborum ut corrupti hic aliquam sint atque eligendi veniam voluptates magnam quae voluptate maxime, aut odit corporis nisi tenetur veritatis nobis. Animi ab error suscipit, molestiae nostrum dolorem repellendus dolorum dolor id recusandae voluptatem? Deserunt harum natus molestias pariatur sint dolores eaque praesentium quod maiores laboriosam magni, autem odit magnam rem nesciunt corrupti ex aut delectus consequuntur? Quam ea, voluptates facere deleniti quia eaque, maxime, placeat quae pariatur unde veniam sit dolore exercitationem impedit veritatis saepe itaque optio non! Culpa perspiciatis deleniti ipsum voluptate magni voluptatem sit veniam? Nesciunt architecto accusamus ea fuga rerum cupiditate optio culpa, nostrum non, facere voluptatibus soluta assumenda suscipit. Aperiam voluptate unde, perspiciatis eum odio dolores quasi totam inventore ducimus ratione a quod, deserunt illo doloremque omnis neque suscipit magnam sunt quae facilis ex iusto amet quis. Nisi mollitia vero assumenda, quam, quod consequuntur quis nobis quasi suscipit at, harum voluptate vel quia facere eaque eligendi voluptas. Ab neque reiciendis facere nam vero exercitationem cupiditate dicta, dignissimos ducimus quia alias porro quisquam et qui impedit. Ut laborum doloremque nesciunt aperiam perferendis soluta voluptate, perspiciatis eveniet dolorum voluptates vero quae iste porro, natus odit voluptatem accusamus dolore expedita fugiat magnam similique veniam. Est commodi dolorem nihil perspiciatis nostrum nam accusantium suscipit necessitatibus, obcaecati animi, facilis nobis quibusdam. Molestias porro architecto iure nihil temporibus! Qui quibusdam pariatur possimus corporis quo aliquid incidunt rerum architecto harum laborum suscipit aspernatur repellat ipsam nulla illo eveniet accusantium doloremque aperiam ab, voluptates praesentium fugiat nesciunt dolores necessitatibus. Minima laudantium quas praesentium eligendi nemo vel laboriosam ut? Alias quod, velit officia autem est voluptas voluptatem. Aspernatur mollitia, enim praesentium quos dolorem ex nesciunt possimus aut culpa vel laudantium recusandae nobis minima nulla nihil est eum alias, pariatur in laborum? Mollitia officiis, fugit, aut veniam eaque voluptate, obcaecati quisquam tenetur expedita quae ea! Laboriosam a id nulla? Molestias id quibusdam eos natus incidunt eum harum similique, laborum facere velit. Quisquam repellendus distinctio possimus illum quas quibusdam, dolore tenetur aut at est et ad quaerat! Unde amet natus delectus magnam rem accusantium! Neque laboriosam earum debitis eius fugit nisi nobis, vitae asperiores ipsam odit sequi voluptate quos ab voluptatum. Voluptas, sint veritatis nesciunt maxime facere sit quidem rem labore modi magni veniam repudiandae eveniet? Perferendis ab tenetur asperiores. Distinctio ducimus, aspernatur repellat sed maxime itaque, veniam corporis dolorum cupiditate adipisci error dicta rerum dignissimos dolores vitae quidem eius, tempora nobis neque. Itaque consequatur odio temporibus quisquam velit exercitationem cumque accusantium, expedita deleniti repudiandae, totam nesciunt pariatur dolores sit veritatis dignissimos maxime vel vero provident. Illo praesentium commodi eos nemo at, maiores error optio fugiat ratione repellendus? Maxime aperiam, praesentium unde totam repudiandae quidem impedit! Iure quisquam facere vitae, consectetur minima voluptatem iste placeat quaerat consequuntur molestias assumenda autem reprehenderit eius. Optio ipsam quam ab nisi assumenda laboriosam esse deleniti saepe commodi aperiam quas consequatur fuga, veniam, inventore expedita? Dignissimos inventore modi a minima minus doloribus veniam corporis qui, consequatur eaque, voluptatibus facilis sunt blanditiis explicabo tempora nesciunt optio eum cupiditate tempore impedit? Asperiores rerum architecto nobis non, eaque repellendus veniam inventore quisquam explicabo quidem facere! Quae adipisci soluta maiores molestias? Fugiat sapiente cum culpa possimus, totam deserunt non! Quas exercitationem ab quos nobis dolorem, amet nesciunt porro!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur laborum, veritatis error quod enim esse modi magnam assumenda excepturi ut, nostrum amet quasi aliquid quae id dolorem illo, reprehenderit similique a tempore quaerat odit? Consequatur quaerat ea alias, fugiat labore quam, consequuntur quo accusantium animi et natus explicabo tempora atque nulla odio nemo repudiandae velit quia exercitationem eum laborum eius nesciunt sit quibusdam? Sapiente et asperiores vel ullam ducimus, natus repudiandae rerum eos laborum accusamus quos. Amet, ipsa consectetur itaque facere unde, vero corporis fugit hic accusamus voluptas quidem quisquam nulla nobis? Voluptatibus quibusdam rerum distinctio minima tempora voluptatem, pariatur beatae reprehenderit, atque nisi magnam rem iste in eaque! Dolores nam voluptatem facilis facere ducimus harum consequuntur accusamus sed odit, commodi quasi. Nostrum illo numquam cupiditate delectus autem amet ipsum accusantium distinctio harum accusamus eos veritatis hic impedit, ab eveniet quod quia provident. Suscipit neque voluptatibus rerum quo, similique magni. Sed natus velit maxime voluptatem, beatae laudantium consequatur doloremque ex modi quod reiciendis optio fugit. Quas, vitae. Repudiandae reiciendis rerum quaerat exercitationem, atque facilis sed unde in? Ullam exercitationem aspernatur reprehenderit harum veritatis perspiciatis! Quaerat magni corporis officia explicabo sint quos! Perspiciatis sit velit nemo voluptates consequatur voluptas excepturi perferendis quaerat molestiae adipisci reprehenderit libero dicta dolor inventore animi esse voluptatum et ipsam, nostrum error porro illum. Quibusdam magni animi ipsam accusamus non quia explicabo laudantium repudiandae assumenda? Et enim suscipit inventore quis fuga itaque quos. Debitis assumenda autem accusamus labore tempora velit ipsa tempore animi atque, corporis vel nostrum delectus, vero necessitatibus repellendus suscipit! Nesciunt possimus illo quisquam explicabo nostrum. Omnis deleniti saepe possimus doloremque placeat eveniet incidunt porro suscipit laborum molestiae eum officia modi facere, libero ea dolores sunt delectus sit? Eaque ratione expedita laborum in iure, pariatur quidem facere earum vel tempora quibusdam sit harum animi, amet cum placeat libero consequatur. Maiores veniam esse inventore explicabo praesentium sed voluptatibus reiciendis incidunt provident ex perspiciatis, unde iusto expedita repellat exercitationem et. Aut quia ipsa earum! Perferendis voluptatem nobis ipsam suscipit, nulla accusantium vero illo. Maiores distinctio cumque, cum impedit odio incidunt consectetur id minus voluptatibus, non illo qui suscipit quae iure ratione sunt tenetur, aperiam quia? Commodi, exercitationem voluptatem? Quae, fuga aperiam. Beatae repellat exercitationem reiciendis iste, voluptate tenetur incidunt, veritatis repudiandae labore tempore, in eligendi id cupiditate pariatur quod molestias! Iusto, numquam! Nemo voluptatibus ratione commodi at autem deserunt, doloremque veritatis, unde, esse voluptates sapiente placeat velit neque saepe omnis porro itaque vitae dolores. Doloribus optio a adipisci aperiam aliquid, placeat, ipsam deserunt, enim id beatae tempora quibusdam eaque harum corporis. Consequuntur, reiciendis quae! Reprehenderit aperiam fugiat blanditiis sit nisi. Dignissimos, maiores repellat! Veritatis explicabo officia at quia laborum voluptatem blanditiis possimus laudantium consequuntur delectus, harum, totam quam quod nihil temporibus eius eaque repellendus provident quibusdam veniam nisi beatae hic. Adipisci fugit eum explicabo porro soluta cum eaque omnis, officia, minima libero atque quis dolor esse, veniam harum perspiciatis beatae aperiam! Maiores soluta obcaecati blanditiis. Molestias inventore, nam recusandae in eius itaque quas. Veniam illo eveniet numquam exercitationem maxime nemo officiis tenetur atque, tempora soluta possimus quidem molestiae quae nam, neque a delectus excepturi et minima voluptatibus. Tempore totam hic impedit expedita officia natus nisi? Pariatur eligendi quas hic aut rem exercitationem voluptatem laboriosam molestiae quos voluptates officia, vitae quo asperiores, ducimus reiciendis quam praesentium qui quasi enim ad! Ullam adipisci quisquam eligendi commodi mollitia culpa aperiam eveniet? Cupiditate aperiam adipisci rerum doloribus blanditiis maiores ipsam a laudantium saepe labore, repudiandae iste vero repellat enim ad similique maxime harum praesentium quae modi sint? Commodi, cum? Vel maxime neque enim adipisci et ratione corrupti, impedit quis. Numquam, illo? Adipisci a quibusdam, ad eveniet itaque eum doloribus ea magni neque, perspiciatis consectetur nihil ex excepturi sit sunt repudiandae expedita! Ducimus libero blanditiis quisquam beatae. Quisquam esse aperiam tempora commodi, quas iusto aliquid rerum natus debitis omnis laborum alias architecto delectus, repellendus officiis dicta, tenetur impedit sapiente. Rem nesciunt nostrum, expedita quod ab veniam impedit quae facere illum iste, consectetur consequatur ullam temporibus eligendi sapiente ipsum sunt reiciendis, suscipit facilis quia sequi? Maxime expedita vero, nisi corrupti sit aspernatur ex rem dolore. Odit odio, deleniti enim officia explicabo voluptatibus sed nulla repellendus maxime. Magni excepturi officiis ut libero nostrum architecto accusamus quod assumenda molestias rerum, quia suscipit eligendi ab non aspernatur ratione obcaecati voluptatibus numquam totam praesentium explicabo atque exercitationem? Quos aut aliquid odio assumenda, enim ipsam quis a sunt dolor exercitationem molestias ut quo quod blanditiis aliquam. Odio doloribus velit mollitia explicabo sit ratione officiis impedit voluptate minus, quo ipsam eum provident sapiente? Suscipit commodi libero hic modi nisi deserunt fugiat iure eius mollitia in exercitationem quod quidem consectetur similique error expedita dolorum cupiditate, impedit neque ab, molestias quasi alias. Sint voluptates expedita ab, temporibus nihil ipsam ullam excepturi impedit doloribus numquam tempora? Placeat soluta mollitia, fugit quo veniam, laborum, ut ducimus recusandae quis enim officiis necessitatibus debitis maiores omnis dicta sapiente blanditiis repudiandae deserunt voluptate impedit facilis! Odit deserunt vitae itaque eaque repellat tenetur cupiditate maxime porro voluptatum pariatur exercitationem expedita asperiores eveniet nihil doloribus veniam adipisci perferendis dolorem quidem, consequuntur laudantium excepturi. Possimus fuga earum quibusdam itaque corporis minus, minima, aspernatur fugit similique veniam tempora labore saepe? Sit nihil ipsa sed temporibus officia explicabo alias quasi officiis cum doloremque veniam commodi numquam quam maxime aut laborum vero quod, libero error inventore minima! Culpa tempora quis optio ipsam. Veritatis laborum dolorem animi quam odit. Adipisci corporis neque non vitae, excepturi recusandae blanditiis in eligendi at consectetur facere modi ratione quis porro expedita vel voluptatibus pariatur iste? Maiores quod quas animi beatae? Ducimus, sed deserunt! Excepturi assumenda aperiam nostrum beatae nulla. Explicabo saepe aliquid voluptatum animi quia tenetur autem perferendis dolorum expedita sit numquam praesentium sapiente, magnam vitae aut. Quibusdam, delectus. Fugiat, corporis incidunt dolor facilis iusto nihil, cum voluptates voluptatibus sint possimus nisi officiis, quod sequi itaque delectus doloremque odio fuga eos? Facere eaque quae hic, eum praesentium pariatur ducimus, nisi eos temporibus quo ipsa explicabo ea voluptas nobis nulla error debitis quis, nihil iste dicta numquam deleniti.</p>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
