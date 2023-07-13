# DiscoveryServiceNodeJS

## English

1. **Open a terminal/command prompt**: Navigate to the folder where you want to clone the project.

2. **Clone the Git repository**: Use the following command, replacing `url-to-your-repository` with the URL to your Git repository:

    ```shell
    git clone https://github.com/enzo34/DiscoveryServiceNodeJS.git
    ```

    This will clone the repository into a new directory in your current location.

3. **Navigate to the project folder**: Use the `cd` command to navigate into the directory that was just created (it should have the same name as the repository):

    ```shell
    cd repository-name
    ```

4. **Install dependencies**: Now that you're inside the project folder, you can install the dependencies using npm:

    ```shell
    npm install
    ```

    This command reads the `package.json` file in the project directory and installs all the required dependencies listed there.

5. **Start the server**: You can now start the server by running the `server.js` file with node:

    ```shell
    node server.js
    ```

    The server will start, and you will be able to register and find services through the API.

6. **Use the Service Discovery API**: 

    - To register a service, make a POST request to `http://localhost:5000/register` with a JSON payload that includes the name and URL of the service. For example:

        ```json
        {
            "name": "users",
            "url": "http://localhost:3000/users"
        }
        ```

    - To find a service, make a GET request to `http://localhost:5000/find/{serviceName}`, where `{serviceName}` is replaced with the name of the service you want to find.

---

## Français

1. **Ouvrez une invite de commande/terminal**: Naviguez vers le dossier où vous souhaitez cloner le projet.

2. **Clonez le dépôt Git**: Utilisez la commande suivante, en remplaçant `url-to-your-repository` par l'URL de votre dépôt Git :

    ```shell
    git clone https://github.com/enzo34/DiscoveryServiceNodeJS.git
    ```

    Cela clonera le dépôt dans un nouveau répertoire à votre emplacement actuel.

3. **Naviguez vers le dossier du projet**: Utilisez la commande `cd` pour naviguer dans le répertoire qui vient d'être créé (il devrait avoir le même nom que le dépôt) :

    ```shell
    cd nom-du-repository
    ```

4. **Installez les dépendances**: Maintenant que vous êtes dans le dossier du projet, vous pouvez installer les dépendances en utilisant npm :

    ```shell
    npm install
    ```

    Cette commande lit le fichier `package.json` dans le répertoire du projet et installe toutes les dépendances requises qui y sont listées.

5. **Démarrez le serveur**: Vous pouvez maintenant démarrer le serveur en exécutant le fichier `server.js` avec node :

    ```shell
    node server.js
    ```

    Le serveur démarrera, et vous pourrez enregistrer et trouver des services via l'API.

6. **Utilisez l'API de découverte de services**:

    - Pour enregistrer un service, faites une requête POST à `http://localhost:5000/register` avec une charge utile JSON qui comprend le nom et l'URL du service. Par exemple :

        ```json
        {
            "name": "users",
            "url": "http://localhost:3000/users"
        }
        ```

    - Pour trouver un service, faites une requête GET à `http://localhost:5000/find/{nomDuService}`, où `{nomDuService}` est remplacé par le nom du service que vous souhaitez trouver.
