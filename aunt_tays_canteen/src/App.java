import java.util.ArrayList;
import model.*;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList <Endereco> lista = new ArrayList<Endereco>();
        lista.add(new Endereco("Rua dos bobos numero 0"));
        Endereco.conectionFront(lista);
    }
}
