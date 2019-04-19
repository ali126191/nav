import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockOutlined from "@material-ui/icons/LockOutlined";
// React icons
import {FaFacebook, FaTwitter, FaGooglePlusG } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        {/* <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <FaTwitter/>
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <FaFacebook/>
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <FaGooglePlusG/>
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Or Be Classical</p>
                    <CardBody>
                      <CustomInput
                        labelText="First Name..."
                        id="first"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutlined/>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg">
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div> */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veniam enim ab corrupti laudantium illo, error voluptatum sunt odit, rem voluptatibus, dolorem dicta sed distinctio ullam dolores excepturi quae odio! Ipsum non, asperiores sed veniam impedit rerum quisquam ullam quaerat tenetur unde inventore itaque aliquid libero pariatur minus velit. Quo obcaecati eos nesciunt molestias corrupti molestiae tenetur aperiam maiores ea, dolorem assumenda magni. Aliquam eius aliquid omnis ab labore minus tenetur molestiae atque autem fugiat earum suscipit rerum consectetur delectus consequuntur, quas deleniti reprehenderit doloribus quae? Accusantium quae praesentium reiciendis vel consequuntur autem, pariatur sunt explicabo dolore obcaecati. Quod itaque obcaecati facere ratione. Ipsa labore, aliquid nobis obcaecati odio quae nemo optio mollitia vero consequuntur nulla voluptatum doloribus similique, eligendi, debitis ipsam magnam consequatur illo! Doloremque voluptate magnam mollitia? Impedit, explicabo. Necessitatibus at veniam, rem debitis amet libero aut distinctio earum eos quam dolorem dignissimos vitae reprehenderit inventore pariatur minima commodi fuga similique optio nostrum? Nemo cumque eligendi error tenetur culpa ad, facilis, nesciunt quas perferendis, voluptatum vel a praesentium illo sequi delectus aspernatur placeat debitis eveniet aut quam provident. Rerum, qui? Velit porro ipsam, vero quas odit quidem eius maiores perspiciatis molestias maxime at numquam corporis laboriosam aspernatur odio ab neque, assumenda incidunt, vitae facilis? Unde voluptatibus doloribus quod eius dicta impedit iste labore beatae ipsam facilis, dolorum ducimus quas quibusdam officiis ab eum natus porro quo tempora commodi tempore vitae ad magni enim? Nihil saepe eligendi esse facere minima possimus iure, reprehenderit architecto enim error, doloribus voluptate quaerat molestiae asperiores deleniti nulla quo omnis? Impedit ratione, dolores aut saepe labore quaerat sapiente sequi, fugiat aliquid autem earum ab error adipisci, incidunt id nulla consequuntur. Placeat inventore perspiciatis cum, ullam magni error veniam nulla dignissimos vero, consectetur optio natus incidunt laudantium nostrum obcaecati ea amet sit odit ab voluptatum aut! Eius vitae consectetur quae, amet necessitatibus numquam porro debitis. Perferendis maxime facilis praesentium, ullam libero a perspiciatis rem ex doloribus amet ducimus sint delectus vel quasi soluta neque veniam repellendus error. Commodi accusamus nemo laboriosam corporis animi ea voluptatum aliquid. Voluptates eos vitae asperiores fugit autem mollitia fugiat nemo aperiam dolorem, numquam molestias at temporibus. Ipsa, voluptatum facere, tempore, illo qui hic laboriosam odio deserunt placeat ea quis. Doloremque voluptatem, iure quae assumenda, voluptas perspiciatis necessitatibus, et at nam accusamus odit reprehenderit? Quidem nihil omnis necessitatibus autem possimus. Tenetur ipsa nisi incidunt nihil obcaecati dolorem consequatur odio perferendis magnam ea magni nemo quod ratione, eos qui eum eveniet. Animi amet nostrum eaque accusantium ipsa, minima mollitia architecto cumque, ex dicta earum, rerum totam unde dolorem fuga doloremque dolore repudiandae minus nobis consequuntur. Deserunt earum, maxime voluptates reprehenderit illum cumque quae non aut facere recusandae optio provident accusamus! Fugiat eveniet, nam velit minima veritatis fugit quos alias quibusdam molestiae? Alias incidunt error voluptas porro quibusdam sed fugit laborum ut corrupti hic aliquam sint atque eligendi veniam voluptates magnam quae voluptate maxime, aut odit corporis nisi tenetur veritatis nobis. Animi ab error suscipit, molestiae nostrum dolorem repellendus dolorum dolor id recusandae voluptatem? Deserunt harum natus molestias pariatur sint dolores eaque praesentium quod maiores laboriosam magni, autem odit magnam rem nesciunt corrupti ex aut delectus consequuntur? Quam ea, voluptates facere deleniti quia eaque, maxime, placeat quae pariatur unde veniam sit dolore exercitationem impedit veritatis saepe itaque optio non! Culpa perspiciatis deleniti ipsum voluptate magni voluptatem sit veniam? Nesciunt architecto accusamus ea fuga rerum cupiditate optio culpa, nostrum non, facere voluptatibus soluta assumenda suscipit. Aperiam voluptate unde, perspiciatis eum odio dolores quasi totam inventore ducimus ratione a quod, deserunt illo doloremque omnis neque suscipit magnam sunt quae facilis ex iusto amet quis. Nisi mollitia vero assumenda, quam, quod consequuntur quis nobis quasi suscipit at, harum voluptate vel quia facere eaque eligendi voluptas. Ab neque reiciendis facere nam vero exercitationem cupiditate dicta, dignissimos ducimus quia alias porro quisquam et qui impedit. Ut laborum doloremque nesciunt aperiam perferendis soluta voluptate, perspiciatis eveniet dolorum voluptates vero quae iste porro, natus odit voluptatem accusamus dolore expedita fugiat magnam similique veniam. Est commodi dolorem nihil perspiciatis nostrum nam accusantium suscipit necessitatibus, obcaecati animi, facilis nobis quibusdam. Molestias porro architecto iure nihil temporibus! Qui quibusdam pariatur possimus corporis quo aliquid incidunt rerum architecto harum laborum suscipit aspernatur repellat ipsam nulla illo eveniet accusantium doloremque aperiam ab, voluptates praesentium fugiat nesciunt dolores necessitatibus. Minima laudantium quas praesentium eligendi nemo vel laboriosam ut? Alias quod, velit officia autem est voluptas voluptatem. Aspernatur mollitia, enim praesentium quos dolorem ex nesciunt possimus aut culpa vel laudantium recusandae nobis minima nulla nihil est eum alias, pariatur in laborum? Mollitia officiis, fugit, aut veniam eaque voluptate, obcaecati quisquam tenetur expedita quae ea! Laboriosam a id nulla? Molestias id quibusdam eos natus incidunt eum harum similique, laborum facere velit. Quisquam repellendus distinctio possimus illum quas quibusdam, dolore tenetur aut at est et ad quaerat! Unde amet natus delectus magnam rem accusantium! Neque laboriosam earum debitis eius fugit nisi nobis, vitae asperiores ipsam odit sequi voluptate quos ab voluptatum. Voluptas, sint veritatis nesciunt maxime facere sit quidem rem labore modi magni veniam repudiandae eveniet? Perferendis ab tenetur asperiores. Distinctio ducimus, aspernatur repellat sed maxime itaque, veniam corporis dolorum cupiditate adipisci error dicta rerum dignissimos dolores vitae quidem eius, tempora nobis neque. Itaque consequatur odio temporibus quisquam velit exercitationem cumque accusantium, expedita deleniti repudiandae, totam nesciunt pariatur dolores sit veritatis dignissimos maxime vel vero provident. Illo praesentium commodi eos nemo at, maiores error optio fugiat ratione repellendus? Maxime aperiam, praesentium unde totam repudiandae quidem impedit! Iure quisquam facere vitae, consectetur minima voluptatem iste placeat quaerat consequuntur molestias assumenda autem reprehenderit eius. Optio ipsam quam ab nisi assumenda laboriosam esse deleniti saepe commodi aperiam quas consequatur fuga, veniam, inventore expedita? Dignissimos inventore modi a minima minus doloribus veniam corporis qui, consequatur eaque, voluptatibus facilis sunt blanditiis explicabo tempora nesciunt optio eum cupiditate tempore impedit? Asperiores rerum architecto nobis non, eaque repellendus veniam inventore quisquam explicabo quidem facere! Quae adipisci soluta maiores molestias? Fugiat sapiente cum culpa possimus, totam deserunt non! Quas exercitationem ab quos nobis dolorem, amet nesciunt porro!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur laborum, veritatis error quod enim esse modi magnam assumenda excepturi ut, nostrum amet quasi aliquid quae id dolorem illo, reprehenderit similique a tempore quaerat odit? Consequatur quaerat ea alias, fugiat labore quam, consequuntur quo accusantium animi et natus explicabo tempora atque nulla odio nemo repudiandae velit quia exercitationem eum laborum eius nesciunt sit quibusdam? Sapiente et asperiores vel ullam ducimus, natus repudiandae rerum eos laborum accusamus quos. Amet, ipsa consectetur itaque facere unde, vero corporis fugit hic accusamus voluptas quidem quisquam nulla nobis? Voluptatibus quibusdam rerum distinctio minima tempora voluptatem, pariatur beatae reprehenderit, atque nisi magnam rem iste in eaque! Dolores nam voluptatem facilis facere ducimus harum consequuntur accusamus sed odit, commodi quasi. Nostrum illo numquam cupiditate delectus autem amet ipsum accusantium distinctio harum accusamus eos veritatis hic impedit, ab eveniet quod quia provident. Suscipit neque voluptatibus rerum quo, similique magni. Sed natus velit maxime voluptatem, beatae laudantium consequatur doloremque ex modi quod reiciendis optio fugit. Quas, vitae. Repudiandae reiciendis rerum quaerat exercitationem, atque facilis sed unde in? Ullam exercitationem aspernatur reprehenderit harum veritatis perspiciatis! Quaerat magni corporis officia explicabo sint quos! Perspiciatis sit velit nemo voluptates consequatur voluptas excepturi perferendis quaerat molestiae adipisci reprehenderit libero dicta dolor inventore animi esse voluptatum et ipsam, nostrum error porro illum. Quibusdam magni animi ipsam accusamus non quia explicabo laudantium repudiandae assumenda? Et enim suscipit inventore quis fuga itaque quos. Debitis assumenda autem accusamus labore tempora velit ipsa tempore animi atque, corporis vel nostrum delectus, vero necessitatibus repellendus suscipit! Nesciunt possimus illo quisquam explicabo nostrum. Omnis deleniti saepe possimus doloremque placeat eveniet incidunt porro suscipit laborum molestiae eum officia modi facere, libero ea dolores sunt delectus sit? Eaque ratione expedita laborum in iure, pariatur quidem facere earum vel tempora quibusdam sit harum animi, amet cum placeat libero consequatur. Maiores veniam esse inventore explicabo praesentium sed voluptatibus reiciendis incidunt provident ex perspiciatis, unde iusto expedita repellat exercitationem et. Aut quia ipsa earum! Perferendis voluptatem nobis ipsam suscipit, nulla accusantium vero illo. Maiores distinctio cumque, cum impedit odio incidunt consectetur id minus voluptatibus, non illo qui suscipit quae iure ratione sunt tenetur, aperiam quia? Commodi, exercitationem voluptatem? Quae, fuga aperiam. Beatae repellat exercitationem reiciendis iste, voluptate tenetur incidunt, veritatis repudiandae labore tempore, in eligendi id cupiditate pariatur quod molestias! Iusto, numquam! Nemo voluptatibus ratione commodi at autem deserunt, doloremque veritatis, unde, esse voluptates sapiente placeat velit neque saepe omnis porro itaque vitae dolores. Doloribus optio a adipisci aperiam aliquid, placeat, ipsam deserunt, enim id beatae tempora quibusdam eaque harum corporis. Consequuntur, reiciendis quae! Reprehenderit aperiam fugiat blanditiis sit nisi. Dignissimos, maiores repellat! Veritatis explicabo officia at quia laborum voluptatem blanditiis possimus laudantium consequuntur delectus, harum, totam quam quod nihil temporibus eius eaque repellendus provident quibusdam veniam nisi beatae hic. Adipisci fugit eum explicabo porro soluta cum eaque omnis, officia, minima libero atque quis dolor esse, veniam harum perspiciatis beatae aperiam! Maiores soluta obcaecati blanditiis. Molestias inventore, nam recusandae in eius itaque quas. Veniam illo eveniet numquam exercitationem maxime nemo officiis tenetur atque, tempora soluta possimus quidem molestiae quae nam, neque a delectus excepturi et minima voluptatibus. Tempore totam hic impedit expedita officia natus nisi? Pariatur eligendi quas hic aut rem exercitationem voluptatem laboriosam molestiae quos voluptates officia, vitae quo asperiores, ducimus reiciendis quam praesentium qui quasi enim ad! Ullam adipisci quisquam eligendi commodi mollitia culpa aperiam eveniet? Cupiditate aperiam adipisci rerum doloribus blanditiis maiores ipsam a laudantium saepe labore, repudiandae iste vero repellat enim ad similique maxime harum praesentium quae modi sint? Commodi, cum? Vel maxime neque enim adipisci et ratione corrupti, impedit quis. Numquam, illo? Adipisci a quibusdam, ad eveniet itaque eum doloribus ea magni neque, perspiciatis consectetur nihil ex excepturi sit sunt repudiandae expedita! Ducimus libero blanditiis quisquam beatae. Quisquam esse aperiam tempora commodi, quas iusto aliquid rerum natus debitis omnis laborum alias architecto delectus, repellendus officiis dicta, tenetur impedit sapiente. Rem nesciunt nostrum, expedita quod ab veniam impedit quae facere illum iste, consectetur consequatur ullam temporibus eligendi sapiente ipsum sunt reiciendis, suscipit facilis quia sequi? Maxime expedita vero, nisi corrupti sit aspernatur ex rem dolore. Odit odio, deleniti enim officia explicabo voluptatibus sed nulla repellendus maxime. Magni excepturi officiis ut libero nostrum architecto accusamus quod assumenda molestias rerum, quia suscipit eligendi ab non aspernatur ratione obcaecati voluptatibus numquam totam praesentium explicabo atque exercitationem? Quos aut aliquid odio assumenda, enim ipsam quis a sunt dolor exercitationem molestias ut quo quod blanditiis aliquam. Odio doloribus velit mollitia explicabo sit ratione officiis impedit voluptate minus, quo ipsam eum provident sapiente? Suscipit commodi libero hic modi nisi deserunt fugiat iure eius mollitia in exercitationem quod quidem consectetur similique error expedita dolorum cupiditate, impedit neque ab, molestias quasi alias. Sint voluptates expedita ab, temporibus nihil ipsam ullam excepturi impedit doloribus numquam tempora? Placeat soluta mollitia, fugit quo veniam, laborum, ut ducimus recusandae quis enim officiis necessitatibus debitis maiores omnis dicta sapiente blanditiis repudiandae deserunt voluptate impedit facilis! Odit deserunt vitae itaque eaque repellat tenetur cupiditate maxime porro voluptatum pariatur exercitationem expedita asperiores eveniet nihil doloribus veniam adipisci perferendis dolorem quidem, consequuntur laudantium excepturi. Possimus fuga earum quibusdam itaque corporis minus, minima, aspernatur fugit similique veniam tempora labore saepe? Sit nihil ipsa sed temporibus officia explicabo alias quasi officiis cum doloremque veniam commodi numquam quam maxime aut laborum vero quod, libero error inventore minima! Culpa tempora quis optio ipsam. Veritatis laborum dolorem animi quam odit. Adipisci corporis neque non vitae, excepturi recusandae blanditiis in eligendi at consectetur facere modi ratione quis porro expedita vel voluptatibus pariatur iste? Maiores quod quas animi beatae? Ducimus, sed deserunt! Excepturi assumenda aperiam nostrum beatae nulla. Explicabo saepe aliquid voluptatum animi quia tenetur autem perferendis dolorum expedita sit numquam praesentium sapiente, magnam vitae aut. Quibusdam, delectus. Fugiat, corporis incidunt dolor facilis iusto nihil, cum voluptates voluptatibus sint possimus nisi officiis, quod sequi itaque delectus doloremque odio fuga eos? Facere eaque quae hic, eum praesentium pariatur ducimus, nisi eos temporibus quo ipsa explicabo ea voluptas nobis nulla error debitis quis, nihil iste dicta numquam deleniti.</p>
          <Footer/>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
